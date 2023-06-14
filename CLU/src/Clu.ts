import { IGameEventListener } from "../api/events/listeners/IGameEventListener";

import { Modifiable, UnModifiable } from "../api/util/bettertypes";

import { Settings } from "../api/Settings";
import { IClu } from '../api/IClu';

export let SETTINGS: Settings = Settings.getDefault()

export class Clu implements IClu {
    constructor(settings: Settings) {
        SETTINGS = settings;
    }
    public getGameEventHandler(): IGameEventListener {
        throw new Error("Method not implemented.");
    }
    public getSettings(): Settings {
        return SETTINGS;
    }
}

Object.defineProperty(globalThis, "__CLU$$", {
    value: Clu
});
