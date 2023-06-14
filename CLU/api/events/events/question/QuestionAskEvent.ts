import { Question } from "../../../types/Question";

export class QuestionAskEvent {
    /**
     * The {@link Question Question}
    */
    public question: Question;

    public constructor(question: Question) {
        this.question = question;
    }
}