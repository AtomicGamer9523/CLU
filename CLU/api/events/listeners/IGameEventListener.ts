import {
    // Specials
    TickEvent, CoinSpawnEvent, GameEndEvent,

    // Player Based
    PlayerUpdateEvent,

    // Questions
    QuestionAskEvent, QuestionResultEvent
} from "../events/all.ts";

export interface IGameEventListener {
    /**
     * Runs once every game tick (update event).
     * 
     * Usually the input param is ignored (unless you know what you are doing)
     * @param {TickEvent} event tick event
    */
    onTick(event: TickEvent): void;

    /**
     * Runs every tick when the server sends the player update packet
     * @param {PlayerUpdateEvent} event event
    */
    onPlayerUpdate(event: PlayerUpdateEvent): void;

    /**
     * Runs every time a new coin spawns
     * @param {CoinSpawnEvent} event event
    */
    onCoinSpawn(event: CoinSpawnEvent): void;

    /**
     * Runs when the game ends
     * @param {GameEndEvent} event event
    */
    onGameEnd(event: GameEndEvent): void;

    /**
     * Runs when the player gets prompted with a question
     * @param {QuestionAskEvent} event question event
    */
    onQuestionAsk(event: QuestionAskEvent): void;

    /**
     * Runs when the question result gets recieved
     * @param {QuestionResultEvent} event question result event
    */
    onQuestionResult(event: QuestionResultEvent): void;
}