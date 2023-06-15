import { ICustomGoalProcess } from "./processes/all.ts";
import { IGameEventListener } from "./events/all.ts";

import { Settings } from "./Settings.ts";

import { ICluDebug } from "./types/IClueDebug.ts";

export interface IClu {

    /**
     * A Simple command that returns the debug info of the current CLU provider
     * @returns {ICluDebug} debug information of the current provider
    */
    debug(): ICluDebug;

    // getPathingBehavior(): IPathingBehavior;

    // getLookBehavior(): ILookBehavior;

    // getFollowProcess(): IFollowProcess;

    getCustomGoalProcess(): ICustomGoalProcess;

    // getWorldProvider(): IWorldProvider;

    // getPathingControlManager(): IPathingControlManager;

    /**
     * 
     */
    getSettings(): Settings


    getGameEventHandler(): IGameEventListener;
}

/**
 * Links the Clu Implementor to then be used!
 * 
 * As a developer do:
 * ```ts
 * LINK(settings => new MyCustomClu(settings));
 * ```
 * 
 * As a user do:
 * ```ts
 * import 'package/MyCustomClu';
 * ```
 * 
 * @param {(settings: Settings) => IClu} f function that registers the custom Clu Implementor
*/
export const LINK = (f: (settings: Settings) => IClu): void => {
    Object.defineProperty(globalThis, "__CLU$$", {
        value: (settings: Settings) => { return f(settings) }
    });
}
