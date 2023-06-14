import { Position3D } from "../../types/Position3D";
import { Rotation3D } from "../../types/Rotation3D";
import { Player } from "../../types/Player";

export class PlayerUpdateEvent {
    /**
     * Player that moved
    */
    public player: Player;

    /**
     * Movement
    */
    public newPos: Position3D;

    /**
     * Rotation
    */
    public newRot: Rotation3D;

    
    public constructor(player: Player, newPos: Position3D, newRot: Rotation3D) {
        this.player = player; this.newPos = newPos; this.newRot = newRot;
    }
}