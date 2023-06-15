import { Goal } from "../../api/pathing/goal/goal.ts";
import { ICustomGoalProcess } from "../../api/processes/all.ts";

export class CustomGoalProcess implements ICustomGoalProcess {
    setGoal(goal: Goal): void {
        throw new Error("Method not implemented.");
    }
    getGoal(): Goal {
        throw new Error("Method not implemented.");
    }
    path(): void {
        throw new Error("Method not implemented.");
    }
    isDone(): boolean {
        throw new Error("Method not implemented.");
    }
}