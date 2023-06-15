import { Settings } from "./Settings.ts";
import { IClu } from "./IClu.ts";

import { UnInit } from "./util/bettertypes.ts";

import { NOOPClu } from "./util/noop/NOOPClu.ts";

const provider: UnInit<IClu> = UnInit.none();

/**
 * ![CLU](https://i.imgur.com/tb5H71z.png|height=100)
 * # C. L. U.
 * 
 * **Coded Likeness Utility**
 * 
 * Use case:
 * ```ts
 * import CLU from "./CLU/api/CLU.ts";
 * import './CLU/src/Clu.ts';
 * 
 * const debug = CLU().debug();
 * console.log(debug);
 * ```
*/
export function getCLU(): IClu {
    type linker = (s: Settings) => IClu | undefined;
    provider.ifUnInit(() => {
        const linked: linker = globalThis["__CLU$$" as keyof typeof globalThis] as unknown as linker;
        if(linked) {
            const settings = Settings.getDefault();
            return linked(settings) as unknown as IClu;
        }
        return new NOOPClu();
    });
    return provider.assertInit();
}

export default getCLU;
