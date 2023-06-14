import { Position3D } from "./Position3D";
import { Rotation3D } from "./Rotation3D";

export class Player {
    /**
     * Player's Username
    */
    public username: string;

    /**
     * Player's Position
    */
    public position: Position3D;

    /**
     * Player's Rotation
    */
    public rotation: Rotation3D;
}