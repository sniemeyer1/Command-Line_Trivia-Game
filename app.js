// Command Line Trivia Game

const fs = require('fs');
const input = require('readline-sync');

let rawdata = fs.readFileSync('Apprentice_TandemFor400_Data.json');
let questions = JSON.parse(rawdata);


//shuffle algorithm
Array.prototype.shuffle = function(){
    var j = this.length, temp, x;
    while (--j > 0) {
        x = Math.floor(Math.random() * j);
        temp = this[j]
        this[j] = this[x];
        this[x] = temp;
    }
    return this
}

function startQuiz(){
    console.log(`\n Welcome to Trivia! \n 
    You will be prompted with a trivia question. 
    Type in the number that corresponds to the answer you 
    would like to choose and then press 'return' \n
    Are you ready? \n`)
    let userInput = input.question("Type 'Y' then press return to begin: ");
    
    if(userInput != 'Y'){
      return startQuiz() 
    }else
        displayQuestion();

    function displayQuestion(){
        questions.shuffle();
        let userScore = 0;
        let numberOfQuestions = 10;
        let i = 0;
            while (i < numberOfQuestions){
                let questionPrompt = questions[i].question;
                let choicesArray = questions[i].incorrect;
                let correctAnswer = questions[i].correct;

                choicesArray.push(correctAnswer)
                
                console.log(`--- \n QUESTION ${i+1}: ${questionPrompt} \n`)
                
                var choices = choicesArray.shuffle();
                let choiceNumberArray = [];

                for (let k = 0; k < choices.length; k++){
                    let choiceNumber = k + 1;
                    choiceNumberArray.push(choiceNumber)
                    console.log(`${choiceNumber}: ${choices[k]} \n `)
                }
                
                let userInput = input.question(`Your Answer: `);
                
                let userAnswer = choices[userInput-1]
                let correctAnswerNumber = choices.indexOf(correctAnswer) + 1;

                    if (userAnswer == correctAnswer){
                        userScore++
                        console.log(`CORRECT!`)
                    }else {
                        console.log(`Sorry, the correct answer was: ${correctAnswerNumber}: ${correctAnswer}`)
                    }
                    console.log(`User Score: ${userScore} `)
                
                
                if (i < numberOfQuestions - 1){
                    input.question(`Press return for next question`);
                } else {
                    console.log(`GAME OVER`)
                }
                
                i++;
            }
            console.log(`Final Score: ${userScore}/${numberOfQuestions}`)


    }
}

startQuiz();