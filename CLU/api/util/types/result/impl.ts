import { Option, None, Some } from "../../bettertypes.ts";
import { Result, Err, Ok } from "../../bettertypes.ts";

type ResultInputType = "Ok" | "Err";

export class ResultImpl<T,E> implements Result<T,E> {
    private value: T | undefined;
    private error: E | undefined;
    private input: ResultInputType;
    constructor(v: T | E, input: ResultInputType) {
        this.input = input;
        if(this.input === "Ok") {
            this.value = v as unknown as T;
            return
        }
        if(this.input === "Err") {
            this.error = v as unknown as E;
            return
        }
        throw new Error("Invalid Input");
    }
    public isOk(): boolean {
        return this.input === "Ok" && this.value !== undefined;
    }
    public isErr(): boolean {
        return this.input === "Err" && this.error !== undefined;
    }
    public ok(): Option<T> {
        if(this.isErr()) return None();
        return Some(this.$);
    }
    public err(): Option<E> {
        if(this.isOk()) return None();
        return Some(this.$$);
    }
    public map<U>(op: (t: T) => U): Result<U, E> {
        if(this.isErr()) return Err(this.$$);
        return Ok(op(this.$));
    }
    public mapOrElse<U>(fallback: (e: E) => U, map: (t: T) => U): U {
        if(this.isOk()) return map(this.$);
        return fallback(this.$$);
    }
    public mapErr<F>(op: (e: E) => F): Result<T, F> {
        if(this.isOk()) return Ok(this.$);
        return Err(op(this.$$));
    }
    public and<U>(res: Result<U, E>): Result<U, E> {
        if(this.isOk()) return res;
        return Err(this.$$);
    }
    public andThen<U>(op: (t: T) => Result<U, E>): Result<U, E> {
        if(this.isOk()) return op(this.$);
        return Err(this.$$);
    }
    public or<F>(res: Result<T, F>): Result<T, F> {
        if(this.isOk()) return Ok(this.$);
        return res;
    }
    public orElse<F>(op: (e: E) => Result<T, F>): Result<T, F> {
        if(this.isOk()) return Ok(this.$);
        return op(this.$$);
    }
    public unwrapOr(optb: T): T {
        if(this.isOk()) return this.$;
        return optb;
    }
    public unwrapOrElse(op: (e: E) => T): T {
        if(this.isOk()) return this.$;
        return op(this.$$);
    }
    public unwrap(): T {
        if(this.isOk()) return this.$;
        throw this.$$;
    }
    public expect(msg: string): T {
        if(this.isOk()) return this.$;
        throw new Error(msg);
    }
    public unwrapErr(): E {
        if(this.isErr()) return this.$$;
        throw new Error("It was Ok!");
    }
    public expectErr(msg: string): E {
        if(this.isErr()) return this.$$;
        throw new Error(msg);
    }
    public get $(): T {
        if(this.isErr()) throw this.$$;
        return this.value as unknown as T;
    }
    private get $$() : E {
        if(this.isOk()) throw new Error("It's a Value!");
        return this.error as unknown as E;
    }
}
