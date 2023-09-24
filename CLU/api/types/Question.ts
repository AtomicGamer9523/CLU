import { Option, Raw } from "types+";

/**
 * A question asked when a user tries to get a coin.
*/
export class Question {
    /**
     * The Text Prompt
    */
    public prompt: Raw<string>;

    /**
     * A list of {@link AnswerOption Answer Options}
    */
    public options: AnswerOption[];

    public constructor(prompt: Raw<string>, options: AnswerOption[]) {
        this.prompt = prompt;this.options = options;
    }
}

/**
 * An singular option to the prompt
*/
export class AnswerOption {
    /**
     * The raw text of the option
    */
    public option: Raw<string>;

    /**
     * Wether it is the correct option
    */
    public correct: Option<boolean>;

    public constructor(option: Raw<string>, correct: Option<boolean>) {
        this.option = option;this.correct = correct;
    }
}