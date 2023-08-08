//@ts-check
import { questions } from './data/questions.js'
import { Quiz } from './models/Quiz.js'
import { UI } from './models/UI.js'


/**
 * 
 * @param {Quiz} quiz 
 * @param {UI} ui 
 */

const renderPage = (quiz, ui) => {
    if(quiz.isEnded()) {
        ui.showScores(quiz.score)
    } else {
        ui.showQuestions(quiz.getQuestionsIndex().text)
        ui.showChoices(quiz.getQuestionsIndex().choices, (currentChoice) => {
            quiz.guess(currentChoice)
            renderPage(quiz, ui)
        })
        ui.showProgress(quiz.questionIndex + 1, quiz.questions.length)
    }
}


function main() {
    const quiz = new Quiz(questions)
    const ui = new UI()

    renderPage(quiz, ui)
}


main()