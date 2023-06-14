export class UnModifiable<T> {
    public static new<T>(v: T): UnModifiable<T> {
        return new UnModifiable(v);
    }
    private v: T;
    private constructor(v: T) {
        this.v = v;
    }
    public get get() {
        return this.v;
    }
}