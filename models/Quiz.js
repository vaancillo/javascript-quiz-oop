// @ts-check
import { Question } from "./Question.js"

export class Quiz {

    questionIndex = 0
    score = 0

    /**
     * 
     * @param {Question[]} questions 
     */
    constructor(questions) {
        this.questions = questions
    }

    /**
     * 
     * @returns {Question} the cuestion found
     */

    getQuestionsIndex() {
        return this.questions[this.questionIndex]
    }


    isEnded() {
        return this.questions.length === this.questionIndex
    }


    /**
     * 
     * @param {string} answer some text
     */

    guess(answer) {
        console.log(answer)
        if(this.getQuestionsIndex().correctAnswer(answer)) {
            this.score++
        }

        this.questionIndex++
    }

}