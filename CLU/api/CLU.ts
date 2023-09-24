import { ICluDebug } from "./types/IClueDebug.ts";
import { Settings } from "./Settings.ts";
import { IClu } from "./IClu.ts";

const DEBUG: ICluDebug = {
    name: "NO-OP C.L.U",
    description: "!!!DO NOT USE!!!",
    version: "v0.0.0",
    authors: ["HyperNite"]
}

class NOOPError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = "NOOPError";
    }
}

class NOOPClu implements IClu {
    public debug(): ICluDebug {
        return DEBUG;
    }
    getCustomGoalProcess(): never {
        throw new NOOPError("CLU not linked!");
    }
    getGameEventHandler(): never {
        throw new NOOPError("CLU not linked!");
    }
    getSettings(): never {
        throw new NOOPError("CLU not linked!");
    }
}

interface ICluConstructor {
    new(settings: Settings): IClu;
}

/**
 * ![CLU](https://i.imgur.com/tb5H71z.png|height=100)
 * # C. L. U.
 * 
 * **Coded Likeness Utility**
 * 
 * Use case:
 * ```ts
 * import init from 'api';
 * import CLU from 'impl';
 * 
 * const debug = init(CLU).debug();
 * console.log(debug);
 * ```
*/
export function init(
    impl?: ICluConstructor
): IClu {
    if (impl) return new impl(Settings.getDefault());
    return new NOOPClu();
}

export default init;
