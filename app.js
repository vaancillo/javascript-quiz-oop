//@ts-check
import { questions } from './data/questions.js'
import { Quiz } from './models/Quiz.js'
import { UI } from './models/UI.js'


function main() {
    const quiz = new Quiz(questions)
    const ui = new UI()

    ui.showQuestions(quiz.getQuestionsIndex().text)
    ui.showChoices(quiz.getQuestionsIndex().choices)
}


main()