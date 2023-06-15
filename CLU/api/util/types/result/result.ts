import { Option } from '../../bettertypes.ts';
import { ResultImpl } from './impl.ts';

export interface Result<T, E> {
    /**
     * Returns true if the result is Ok.
    */
    isOk(): boolean

    /**
     * Returns true if the result is Err.
    */
    isErr(): boolean

    /**
     * Converts from Result<T, E> to Option<T> and discarding the error, if any.
    */
    ok(): Option<T>

    /**
     * Converts from Result<T, E> to Option<E> and discarding the success value, if any.
    */
    err(): Option<E>

    /**
     * Maps a Result<T, E> to Result<U, E> by applying a function to a contained Ok value, leaving an Err value untouched.
     *
     * This function can be used to compose the results of two functions.
    */
    map<U>(op: (t: T) => U): Result<U, E>

    /**
     * Maps a Result<T, E> to U by applying a function to a contained Ok value, or a fallback function to a contained Err value.
     *
     * This function can be used to unpack a successful result while handling an error.
    */
    mapOrElse<U>(fallback: (e: E) => U, map: (t: T) => U): U

    /**
     * Maps a Result<T, E> to Result<T, F> by applying a function to a contained Err value, leaving an Ok value untouched.
     *
     * This function can be used to pass through a successful result while handling an error.
    */
    mapErr<F>(op: (e: E) => F): Result<T, F>

    /**
     * Returns res if the result is Ok, otherwise returns the Err value of self.
    */
    and<U>(res: Result<U, E>): Result<U, E>

    /**
     * Calls op if the result is Ok, otherwise returns the Err value of self.
     *
     * This function can be used for control flow based on Result values.
    */
    andThen<U>(op: (t: T) => Result<U, E>): Result<U, E>

    /**
     * Returns res if the result is Err, otherwise returns the Ok value of self.
    */
    or<F>(res: Result<T, F>): Result<T, F>

    /**
     * Calls op if the result is Err, otherwise returns the Ok value of self.
     *
     * This function can be used for control flow based on result values.
    */
    orElse<F>(op: (e: E) => Result<T, F>): Result<T, F>

    /**
     * Unwraps a result, yielding the content of an Ok. Else, it returns optb.
    */
    unwrapOr(optb: T): T

    /**
     * Unwraps a result, yielding the content of an Ok. If the value is an Err then it calls op with its value.
    */
    unwrapOrElse(op: (e: E) => T): T

    /**
     * Unwraps a result, yielding the content of an Ok.
     *
     * Throws Error if the value is an Err, with a error message provided by the Err's value.
    */
    unwrap(): T | never

    /**
     * Unwraps a result, yielding the content of an Ok.
     *
     * Throws Error if the value is an Err, with the error message being the passed message.
    */
    expect(msg: string): T | never

    /**
     * Unwraps a result, yielding the content of an Err.
     *
     * Throws Error if the value is an Ok.
    */
    unwrapErr(): E | never

    /**
     * Unwraps a result, yielding the content of an Err.
     *
     * Throws Error if the value is an Ok, with the error message being the passed message.
    */
    expectErr(msg: string): E | never

    /**
     * shortcut of unwrap, throws the error if Result is Err
    */
    get $(): T | never
}

/**
 * A simple wrapper to create a new {@link Result}
 * @param {T} value successful value
 * @returns {Result<T,E>} the result
*/
export function Ok<T,E>(value: T): Result<T,E> {
    return new ResultImpl<T,E>(value, "Ok");
}

/**
 * A simple wrapper to create a new {@link Result}
 * @param {E} err error value
 * @returns {Result<T,E>} the result
*/
export function Err<T,E>(err: E): Result<T,E> {
    return new ResultImpl<T,E>(err, "Err");
}
