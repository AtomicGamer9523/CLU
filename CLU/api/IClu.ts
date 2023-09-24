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
