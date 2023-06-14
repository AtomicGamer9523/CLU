/**
 * Dangerous Data that needs to be carefully serialized to be used
*/
export class Raw<T> {
    #inner: T;
    constructor(data: T) {
        this.#inner = data;
    }
    /**
     * **! ! ! WARNING ! ! !**
     * 
     * **RETURNS THE RAW DATA THAT MIGHT NOT BE WHAT YOU ARE EXPECTING**
     * @returns {any} **RAW DATA**
    */
    public getRawData(): T {
        return this.#inner;
    }
}