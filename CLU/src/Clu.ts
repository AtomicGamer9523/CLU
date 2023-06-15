import { IGameEventListener } from "../api/events/listeners/IGameEventListener.ts";

import { Settings } from "../api/Settings.ts";
import { IClu, LINK } from '../api/IClu.ts';


import { GameEventListener } from "./events/GameEventListener.ts";
import { ICustomGoalProcess } from "../api/processes/ICustomGoalProcess.ts";
import { ICluDebug } from "../api/types/IClueDebug.ts";

export let SETTINGS: Settings = Settings.getDefault();

const DEBUG: ICluDebug = {
    name: "Hyper C.L.U.",
    description: "A built-in feature rich C.L.U",
    version: "v0.1.0",

    authors: ["HyperNite"],
}

export class Clu implements IClu {
    private listener: GameEventListener;
    constructor(settings: Settings) {
        SETTINGS = settings;
        this.listener = new GameEventListener();
    }
    public debug(): ICluDebug {
        return DEBUG;
    }
    public getGameEventHandler(): IGameEventListener {
        return this.listener;
    }
    public getSettings(): Settings {
        return SETTINGS;
    }
    getCustomGoalProcess(): ICustomGoalProcess {
        throw new Error("Method not implemented.");
    }
}

LINK(settings => new Clu(settings));
