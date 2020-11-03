// Command Line Trivia Game

const fs = require('fs');
const input = require('readline-sync');

let rawdata = fs.readFileSync('Apprentice_TandemFor400_Data.json');
let quizData = JSON.parse(rawdata);
let numberOfQuestions = 10;

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
    //welcome message
    console.log(`\n Welcome to Trivia! \n 
    You will be prompted with a trivia question. 
    Type in the number that corresponds to the answer 
    you would like to choose.\n
    Are you ready? \n`)

    //reusable input validator function
    function validateAnswer(answerPrompt, isValid){
        let userInput = input.question(answerPrompt);
        
        while(!isValid(userInput)) {
            console.log("Invalid input. Try again.");
            userInput = input.question(answerPrompt);
        }
        return userInput;
    }

    //start game confirmation function
    let isStartingGame = function(start){
        if(start != 'Y'){
            return false
        }
        displayQuestion()
        return true
    }
  
    validateAnswer("Type 'Y' then 'return' to start the game. ", isStartingGame)

    //calls shuffle algorithm to randomize questions
    function displayQuestion(){
        quizData.shuffle();
        let userScore = 0;
        
        let i = 0;
        while (i < numberOfQuestions){
                let questionPrompt = quizData[i].question;
                let choicesArray = quizData[i].incorrect;
                let correctAnswer = quizData[i].correct;

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
                        console.log(`Sorry, the correct answer was: ${correctAnswerNumber}: ${correctAnswer}`)
                    }

                    if(i < numberOfQuestions-1){
                    console.log(`User Score: ${userScore} `)
                    input.question(`Press return for next question`);
                    }
                }
            i++;
        }
        console.log(`Final Score ${userScore}/${numberOfQuestions}`)
        validateAnswer("Type 'Y' then 'return' to start over: ", isStartingGame)
    }  
}
startQuiz()