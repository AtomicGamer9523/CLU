import { Dangerous } from "../../util/bettertypes.ts";

export class TickEvent {
    /**
     * Dangerous Data
    */
    public data: Dangerous;
    
    public constructor(data: Dangerous) {
        this.data = data;
    }
}