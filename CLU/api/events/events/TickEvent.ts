import { Dangerous } from "types+";

export class TickEvent {
    /**
     * Dangerous Data
    */
    public data: Dangerous;
    
    public constructor(data: Dangerous) {
        this.data = data;
    }
}