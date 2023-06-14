import { IClu } from "./IClu";
import { Settings } from "./Settings";
import { IGameEventListener } from "./events/listeners/IGameEventListener";

import { UnInit } from "./util/bettertypes";

const provider: UnInit<IClu> = UnInit.none();

export function getCLU(): IClu {
    provider.ifUnInit(() => {
        const linked = globalThis["__CLU$$"];
        if(linked) return eval(`new ${linked}(${Settings.getDefault()})`);
        return getNOOPClu();
    });
    return provider.assertInit();
}

export default getCLU;

function getNOOPClu(): IClu {
    class NOOP implements IClu {
        getGameEventHandler(): IGameEventListener {
            throw new Error("NOOP");
        }
        getSettings(): Settings {
            throw new Error("NOOP");
        }
    }
    return new NOOP();
}