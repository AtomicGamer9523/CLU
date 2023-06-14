import { Question } from "../../../types/Question";

export class QuestionResultEvent {
    /**
     * The {@link Question Question}
    */
    public question: Question;

    /**
     * Wether it was answered correctly or not.
    */
    public correct: boolean;

    public constructor(question: Question, correct: boolean) {
        this.question = question;
        this.correct = correct;
    }
}