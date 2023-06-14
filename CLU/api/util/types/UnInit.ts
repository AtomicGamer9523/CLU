import { None, Option, Some } from "../bettertypes";

export class UnInit<T> {

    public static none<V>(): UnInit<V> {
        return UnInit.some<V>();
    }
    public static some<V>(v?: V): UnInit<V> {
        return new UnInit<V>(v);
    }

    private inner: Option<T>;
    private constructor(inner?: T) {
        this.inner = inner !== undefined ? Some(inner) : None()
    }

    public ifUnInit(fn: () => T): void {
        if (this.isInit()) return;
        this.inner = Some(fn());
    }

    public isInit(): boolean {
        return this.inner.isSome();
    }

    public assertInit(): T {
        return this.inner.unwrap();
    }
}