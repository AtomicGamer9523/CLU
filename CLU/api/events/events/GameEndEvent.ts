import { Player } from "../../types/Player";

export class GameEndEvent {
    /**
     * Player who won
    */
    public winner: Player;
    
    public constructor(winner: Player) {
        this.winner = winner;
    }
}