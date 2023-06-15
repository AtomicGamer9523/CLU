import { Position3D } from "./Position3D.ts";
import { Rotation3D } from "./Rotation3D.ts";

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

    public constructor(username: string, position: Position3D, rotation: Rotation3D) {
        this.username = username; this.position = position; this.rotation = rotation;
    }
}