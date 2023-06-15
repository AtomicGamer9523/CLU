export class NOOPError extends Error {
    constructor(data: string) {
        super(data);
        this.name = "NOOP Error"
    }
}