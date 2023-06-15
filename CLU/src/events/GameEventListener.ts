import {
    IGameEventListener
} from "../../api/events/listeners/all.ts";
import {
    // Specials
    TickEvent, CoinSpawnEvent, GameEndEvent,

    // Player Based
    PlayerUpdateEvent,

    // Questions
    QuestionAskEvent, QuestionResultEvent,
} from "../../api/events/events/all.ts";

export class GameEventListener implements IGameEventListener {
    constructor() {
        console.log("Started !")
    }
    public onPlayerUpdate(event: PlayerUpdateEvent): void {}
    public onTick(event: TickEvent): void {}
    public onCoinSpawn(event: CoinSpawnEvent): void {}
    public onGameEnd(event: GameEndEvent): void {}
    public onQuestionAsk(event: QuestionAskEvent): void {}
    public onQuestionResult(event: QuestionResultEvent): void {}
}