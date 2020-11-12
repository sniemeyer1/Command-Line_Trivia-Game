// Command Line Trivia Game

const fs = require('fs');
const input = require('readline-sync');

let rawdata = fs.readFileSync('Apprentice_TandemFor400_Data.json');
let quizData = JSON.parse(rawdata);
let numberOfQuizQuestions = 10;
let userScore = 0;
const startGameInput = `Y`;
const triviaRules = `\n Welcome to Trivia! \n 
You will be prompted with a trivia question. 
Type in the number that corresponds to the answer 
you would like to choose.\n
Are you ready? \n`

// //reusable input validator function
function validateAnswer(answerPrompt, isValid){
    let userInput = input.question(answerPrompt);
    
    while(!isValid(userInput)) {
        console.log("Invalid input. Try again.");
        userInput = input.question(answerPrompt);
    }
    return userInput;
}

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

function getQuestion(x){
    let question = quizData[x].question
    let questionNumber = x + 1
    console.log(`\nQuestion ${questionNumber}: ${question}\n`) 
}

function getFullAnswerArray(x){
    let answers = quizData[x].incorrect
    let correctAnswer = quizData[x].correct
    answers.push(correctAnswer)
    answers.shuffle()
        for (let j = 0; j < answers.length; j++) {
        let answerNumber = j + 1
        console.log(`${answerNumber}: ${answers[j]}`)
        }
    return answers
}

function getCorrectAnswerNumber(x, answerArray){
    let correctAnswerNumber = answerArray.indexOf(quizData[x].correct)
    correctAnswerNumber = correctAnswerNumber + 1
    return correctAnswerNumber
}

function gradeUserAnswer(userAns, correct){
    if (userAns == correct){
        userScore++
        console.log(`CORRECT!`)
    }else{
        console.log(`INCORRECT.`)
    }
    if(i < numberOfQuizQuestions-1){
        console.log(`User Score: ${userScore}`)
        input.question(`Press 'return' for next question`);
    }
    return userScore
}

function getChoiceNumberArray(array){
    let choiceNumberArray = [];
    for (let k = 0; k < array.length; k++){
        let choiceNumber = k + 1;
        choiceNumberArray.push(choiceNumber)
    }
    return choiceNumberArray
}

//boolean function for validating input
let isReady = function(start){
    if(start != startGameInput){
        return false
    }
    displayQuestion()
    return true
}

function startGame(){
    console.log(triviaRules)
    validateAnswer(`Type '${startGameInput}' then 'return' to start the game. `, isReady)
}  

function displayQuestion(){
    quizData.shuffle()
    i = 0;
    while (i < numberOfQuizQuestions){
    getQuestion(i)
    let answerArray = getFullAnswerArray(i)
    let numbersArray = getChoiceNumberArray(answerArray)

    let isValidMultiChoiceAnswer = function(multiChoiceAnswer){
        return numbersArray.includes(Number(multiChoiceAnswer))
    };

    let validatedAnswer = (validateAnswer(`\nYour Answer: `, isValidMultiChoiceAnswer))
    
    gradeUserAnswer(validatedAnswer, getCorrectAnswerNumber(i, answerArray))
    i++
    }
    console.log(`\nGAME OVER. Final Score: ${userScore}/10 \n`)
 }   

startGame()





// function displayQuestion(jsonData, numOfQ){
//     let userScore = 0;
//     jsonData.shuffle();

//     let i = 0;
//     while (i < numOfQ){
//             let questionPrompt = jsonData[i].question;
//             let choicesArray = jsonData[i].incorrect;
//             let correctAnswer = jsonData[i].correct;

//             choicesArray.push(correctAnswer)
            
//             console.log(`--- \n QUESTION ${i+1}: ${questionPrompt} \n`)
            
//             var choices = choicesArray.shuffle();
//             let choiceNumberArray = [];

//             for (let k = 0; k < choices.length; k++){
//                 let choiceNumber = k + 1;
//                 choiceNumberArray.push(choiceNumber)
//                 console.log(`${choiceNumber}: ${choices[k]} \n `)
//             };
        
//             let isValidMultiChoiceAnswer = function(multiChoiceAnswer){
//                 if(!choiceNumberArray.includes(Number(multiChoiceAnswer))){
//                     return false
//                 }
//                 return true
//             };
            
//             gradeAnswer(validateAnswer('Your Answer: ', isValidMultiChoiceAnswer));

//             function gradeAnswer(answer){
//                 let userAnswer = choices[answer-1]
//                 let correctAnswerNumber = choices.indexOf(correctAnswer) + 1;

//                 if (userAnswer === correctAnswer){
//                     userScore++
//                     console.log(`CORRECT!`)
//                 }else {
//                     console.log(`Sorry, the correct answer was: ${correctAnswerNumber}: ${correctAnswer}\n`)
//                 }

//                 if(i < numOfQ-1){
//                 console.log(`User Score: ${userScore} `)
//                 input.question(`Press 'return' for next question`);
//                 }
//             }
//         i++;
        
//     }
//     console.log(`GAME OVER. Final Score: ${userScore}/${numOfQ}\n`)
//     validateAnswer(`Type '${startGameInput}' then 'return' to start over: `, isReady)
// } 



// function startQuiz(){
//     console.log(triviaRules)
//     validateAnswer(`Type '${startGameInput}' then 'return' to start the game. `, isReady)
// }

// startQuiz();

//module.exports = getQuestionData;