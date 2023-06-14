import { Result } from '../../bettertypes';
import { OptionImpl } from "./impl";

export interface Option<T> {
    /**
     * Returns true if the option is a Some value.
    */
    isSome(): boolean

    /**
     * Returns true if the option is a None value.
    */
    isNone(): boolean

    /**
     * throw Error if the value is a None with a custom error message provided by msg.
    */
    expect(msg: string): T | never

    /**
     * return the value v out of the Option<T> if it is Some(v).
    */
    unwrap(): T | never

    /**
     * Returns the contained value or a placeholder.
    */
    unwrapOr(placeholder: T): T

    /**
     * Returns the contained value or computes it from a placeholderFn.
    */
    unwrapOrElse(placeholderFn: () => T): T

    /**
     * Maps an Option<T> to Option<U> by applying a function to a contained value.
    */
    map<U>(fn: (value: T) => U): Option<U>

    /**
     * Applies a function to the contained value (if any), or returns the provided placeholder (if not).
    */
    mapOr<U>(placeholder: U, fn: (value: T) => U): U

    /**
     * Applies a function to the contained value (if any), or computes with placeholderFn (if not).
    */
    mapOrElse<U>(placeholderFn: () => U, fn: (value: T) => U): U

    /**
     * Transforms the Option<T> into a Result<T, E>, mapping Some(v) to Ok(v) and None to Err(err).
    */
    okOr<E>(err: E): Result<T, E>

    /**
     * Transforms the Option<T> into a Result<T, E>, mapping Some(v) to Ok(v) and None to Err(err()).
    */
    okOrElse<E>(err: () => E): Result<T, E>

    /**
     * Returns None if the option is None, otherwise returns optb.
    */
    and<U>(optb: Option<U>): Option<U>

    /**
     * Returns None if the option is None, otherwise calls f with the wrapped value and returns the result.
     * You can recognize it as flatMap.
    */
    andThen<U>(fn: (value: T) => Option<U>): Option<U>

    /**
     * Returns None if the option is None, otherwise calls {@link predicate}
     * with the wrapped value and returns:
     * 
     * - Some(v) if predicate returns true (where 'v' is the wrapped value), and
     * - None if predicate returns false.
    */
    filter(predicate: (value: T) => boolean): Option<T>

    /**
     * Returns the option if it contains a value, otherwise returns optb.
    */
    or(optb: Option<T>): Option<T>

    /**
     * Returns the option if it contains a value, otherwise calls f and returns the result.
    */
    orElse(fn: () => Option<T>): Option<T>

    /**
     * Returns Some if exactly one of self, optb is Some, otherwise returns None.
    */
    xor(optb: Option<T>): Option<T>

    /**
     * shortcut of unwrap
    */
    get $(): T | never
}

/**
 * A simple wrapper to create an {@link Option} enum
 * @param {T | undefined} value value to use
 * @returns {Option<T>} the resulting option enum
*/
export function Some<T>(value?: T): Option<T> {
    return new OptionImpl(value);
}

/**
 * A simple wrapper to create an epmty {@link Option} enum
 * @returns {Option<T>} the resulting option enum
*/
export function None<T>(): Option<T> {
    return new OptionImpl();
}
