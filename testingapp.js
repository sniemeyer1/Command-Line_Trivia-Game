const fs = require('fs');
const input = require('readline-sync');

let rawdata = fs.readFileSync('Apprentice_TandemFor400_Data.json');
let quizData = JSON.parse(rawdata);


const numberOfQuestions = 3;
const startGameInput = `Y`;
const triviaRules = `\n Welcome to Trivia! \n 
You will be prompted with a trivia question. 
Type in the number that corresponds to the answer 
you would like to choose.\n
Are you ready? \n`

//reusable shuffle algorithm
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

//reusable input validator function
function validateAnswer(answerPrompt, isValid){
    let userInput = input.question(answerPrompt);
    
    while(!isValid(userInput)) {
        console.log("Invalid input. Try again.");
        userInput = input.question(answerPrompt);
    }
    return userInput;
}


function getquestion(jsonData, numOfQ){let userScore = 0;
    
    jsonData.shuffle();

    let i = 0;
    while (i < numOfQ){
            let questionPrompt = jsonData[i].question;
            let choicesArray = jsonData[i].incorrect;
            let correctAnswer = jsonData[i].correct;

            choicesArray.push(correctAnswer)
            
            console.log(`--- \n QUESTION ${i+1}: ${questionPrompt} \n`)
            
            var choices = choicesArray.shuffle();
            let choiceNumberArray = [];

            for (let k = 0; k < choices.length; k++){
                let choiceNumber = k + 1;
                choiceNumberArray.push(choiceNumber)
                console.log(`${choiceNumber}: ${choices[k]} \n `)
            };
        
            let isValidMultiChoiceAnswer = function(multiChoiceAnswer){
                if(!choiceNumberArray.includes(Number(multiChoiceAnswer))){
                    return false
                }
                return true
            };
            
            gradeAnswer(validateAnswer('Your Answer: ', isValidMultiChoiceAnswer));

            function gradeAnswer(answer){
                let userAnswer = choices[answer-1]
                let correctAnswerNumber = choices.indexOf(correctAnswer) + 1;

                if (userAnswer === correctAnswer){
                    userScore++
                    console.log(`CORRECT!`)
                }else {
                    console.log(`Sorry, the correct answer was: ${correctAnswerNumber}: ${correctAnswer}\n`)
                }

                if(i < numOfQ-1){
                console.log(`User Score: ${userScore} `)
                input.question(`Press 'return' for next question`);
                }
            }
        i++;
        return i
    }
    console.log(`GAME OVER. Final Score: ${userScore}/${numOfQ}\n`)
    validateAnswer(`Type '${startGameInput}' then 'return' to start over: `, isReady)
}

module.exports = getquestion