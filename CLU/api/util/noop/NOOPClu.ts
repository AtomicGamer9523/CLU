import { ICustomGoalProcess } from "../../processes/all.ts";
import { IGameEventListener } from "../../events/all.ts";

import { Settings } from "../../Settings.ts";
import { IClu } from "../../IClu.ts";

import { NOOPError } from "./NOOP.ts";
import { ICluDebug } from "../../types/IClueDebug.ts";

const DEBUG: ICluDebug = {
    name: "NOOP C.L.U",
    description: "!!!DO NOT USE!!!",
    version: "v0.0.0",

    authors: ["HyperNite"]
}

export class NOOPClu implements IClu {
    public debug(): ICluDebug {
        return DEBUG;
    }
    getCustomGoalProcess(): ICustomGoalProcess {
        throw new NOOPError("CLU not linked!");
    }
    getGameEventHandler(): IGameEventListener {
        throw new NOOPError("CLU not linked!");
    }
    getSettings(): Settings {
        throw new NOOPError("CLU not linked!");
    }
}