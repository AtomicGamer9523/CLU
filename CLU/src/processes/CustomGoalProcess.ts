import { ICustomGoalProcess } from "../../api/processes/all.ts";
import { Position3D } from "../../api/types/Position3D.ts";

export class CustomGoalProcess implements ICustomGoalProcess {
    setGoal(goal: Position3D): void {
        throw new Error("Method not implemented.");
    }
    getGoal(): Position3D {
        throw new Error("Method not implemented.");
    }
    path(): void {
        throw new Error("Method not implemented.");
    }
    isDone(): boolean {
        throw new Error("Method not implemented.");
    }
}