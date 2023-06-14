import {
    IGameEventListener
} from "../../api/events/listeners/all";
import {
    // Specials
    TickEvent, CoinSpawnEvent, GameEndEvent,

    // Player Based
    PlayerMoveEvent, PlayerRotateEvent,

    // Questions
    QuestionAskEvent, QuestionResultEvent
} from "../../api/events/events/all";

export class GameEventListener implements IGameEventListener {
    constructor() {
        
    }
    onTick(event: TickEvent): void {
        throw new Error("Method not implemented.");
    }
    onPlayerMove(event: PlayerMoveEvent): void {
        throw new Error("Method not implemented.");
    }
    onPlayerRotate(event: PlayerRotateEvent): void {
        throw new Error("Method not implemented.");
    }
    onCoinSpawn(event: CoinSpawnEvent): void {
        throw new Error("Method not implemented.");
    }
    onGameEnd(event: GameEndEvent): void {
        throw new Error("Method not implemented.");
    }
    onQuestionAsk(event: QuestionAskEvent): void {
        throw new Error("Method not implemented.");
    }
    onQuestionResult(event: QuestionResultEvent): void {
        throw new Error("Method not implemented.");
    }
}