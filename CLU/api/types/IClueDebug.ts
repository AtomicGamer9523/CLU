export interface ICluDebug {
    /** A simple name */
    readonly name: string;
    /** A short description */
    readonly description: string;
    /** Version */
    readonly version: string;
    /** Authors */
    readonly authors: readonly string[];
    /**
     * Other custom metadata.
     * Not required but can be used for storing public constants like discord server invite ;)
    */
    readonly custom?: {
        //deno-lint-ignore no-explicit-any
        [key: string]: any;
    }
}