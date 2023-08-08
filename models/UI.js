export class UI {
    constructor() {}

    /**
     * 
     * @param {string} text question to render
     */
    showQuestions(text) {
        const questionTitle = document.getElementById('question')
        questionTitle.innerHTML = text
    }


    /**
     * 
     * @param {string[]} choices the choices of the question
     */

    showChoices(choices, callBack) {
        const choicesContainer = document.getElementById('choices')
        choicesContainer.innerHTML = ''

        for(let i = 0; i < choices.length; i++) {
            const button = document.createElement('button')
            button.innerText = choices[i]
            button.className = 'button'
            // add event listener
            button.addEventListener('click', () => callBack(choices[i]))

            choicesContainer.append(button)
        }
    }

    /**
     * 
     * @param {number} score score total
     */

    showScores(score) {
        const quizEndHTML = `
            <h1>Quiz Finished</h1>
            <h2>Your score is: ${score}</h2>
        `
        const quizEndContainer = document.getElementById('quiz')
        quizEndContainer.innerHTML = quizEndHTML

    }

    /**
     * 
     * @param {number} currenIndex the current index of quiz
     * @param {number} total the total questions
     */

    showProgress(currenIndex, total) {
        const element = document.getElementById('progress')
        element.innerHTML = `Question ${currenIndex} of ${total}`
    }

}