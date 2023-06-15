import { Player } from "../../types/Player.ts";

export class GameEndEvent {
    /**
     * Player who won
    */
    public winner: Player;
    
    public constructor(winner: Player) {
        this.winner = winner;
    }
}