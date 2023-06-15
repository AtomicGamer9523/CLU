import { UnModifiable } from "../bettertypes.ts";

export class Modifiable<T> {
    public static new<T>(v: T): Modifiable<T> {
        return new Modifiable(v);
    }
    private v: T;
    private constructor(v: T) {
        this.v = v;
    }
    public get get() {
        return this.v;
    }
    public set write(v: T) {
        this.v = v;
    }
    public asUnModifiable(): UnModifiable<T> {
        return UnModifiable.new(this.get);
    }
}