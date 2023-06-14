import { IGameEventListener } from "./events/listeners/IGameEventListener";

import { Settings } from "./Settings";

export interface IClu {
    // getPathingBehavior(): IPathingBehavior;

    // getLookBehavior(): ILookBehavior;

    // getFollowProcess(): IFollowProcess;

    // getCustomGoalProcess(): ICustomGoalProcess;

    // getWorldProvider(): IWorldProvider;

    // getPathingControlManager(): IPathingControlManager;

    /**
     * 
     */
    getSettings(): Settings


    getGameEventHandler(): IGameEventListener;
}