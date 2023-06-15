// import { Goal } from "../pathing/goal/goal.ts";
import { Position3D } from "../types/Position3D.ts";

import { ICluProcess } from "./all.ts";

export interface ICustomGoalProcess extends ICluProcess {
    setGoal(goal: Position3D): void;
    getGoal(): Position3D;
    path(): void;
}