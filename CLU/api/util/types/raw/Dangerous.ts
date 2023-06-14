/**
 * Dangerous Data that needs to be carefully serialized to be used
*/
export class Dangerous {
    #inner: any;
    constructor(data: any) {
        this.#inner = data;
    }
    /**
     * **! ! ! WARNING ! ! !**
     * 
     * **RETURNS THE RAW DATA THAT CAN BE ANYTHING**
     * @returns {any} **RAW DATA**
    */
    public getDangerousData(): any {
        return this.#inner;
    }
}