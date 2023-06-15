import { Position3D } from "../../types/Position3D.ts";

export class CoinSpawnEvent {
    /**
     * Location of the coin spawn
    */
    public location: Position3D;
    
    public constructor(location: Position3D) {
        this.location = location;
    }
}