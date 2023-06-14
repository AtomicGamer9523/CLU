import { Option, Some, None } from '../../bettertypes';
import { Result, Err, Ok } from '../../bettertypes';

export class OptionImpl<T> implements Option<T> {
    private value: T | undefined
    constructor(value?: T) {
        this.value = value
    }
    public isSome(): boolean {
        return !this.isNone();
    }
    public isNone(): boolean {
        return this.value === undefined || this.value === null;
    }
    public expect(msg: string): T {
        if(this.isNone()) throw new Error(msg);
        return this.value as unknown as T;
    }
    public unwrap(): T {
        return this.expect("value was not defined!");
    }
    public unwrapOr(placeholder: T): T {
        if(this.isNone()) return placeholder;
        return this.value as unknown as T;
    }
    public unwrapOrElse(placeholderFn: () => T): T {
        if(this.isNone()) return placeholderFn();
        return this.value as unknown as T;
    }
    public map<U>(fn: (value: T) => U): Option<U> {
        if(this.isNone()) return None();
        return Some(fn(this.value as unknown as T));
    }
    public mapOr<U>(placeholder: U, fn: (value: T) => U): U {
        if(this.isNone()) return placeholder;
        return this.map(fn).$;
    }
    public mapOrElse<U>(placeholderFn: () => U, fn: (value: T) => U): U {
        if(this.isNone()) return placeholderFn();
        return this.map(fn).$;
    }
    public okOr<E>(err: E): Result<T, E> {
        if(this.isSome()) return Ok(this.$);
        return Err(err);
    }
    public okOrElse<E>(err: () => E): Result<T, E> {
        if(this.isSome()) return Ok(this.$);
        return Err(err());
    }
    public and<U>(optb: Option<U>): Option<U> {
        if(this.isNone()) return None();
        return optb;
    }
    public andThen<U>(fn: (value: T) => Option<U>): Option<U> {
        if(this.isNone()) return None();
        return fn(this.$);
    }
    public filter(predicate: (value: T) => boolean): Option<T> {
        if(this.isNone()) return None();
        if(predicate(this.$)) return this;
        return None();
    }
    public or(optb: Option<T>): Option<T> {
        if(this.isSome()) return this;
        return optb;
    }
    public orElse(fn: () => Option<T>): Option<T> {
        if(this.isSome()) return this;
        return fn();
    }
    public xor(optb: Option<T>): Option<T> {
        if(this.isSome() && optb.isNone()) return this;
        if(this.isNone() && optb.isSome()) return optb;
        return None();
    }
    public get $() {
        return this.unwrap();
    }
}