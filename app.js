// Command Line Trivia Game

const fs = require('fs');
const input = require('readline-sync');


let rawdata = fs.readFileSync('Apprentice_TandemFor400_Data.json');
let questions = JSON.parse(rawdata);

function startQuiz(prompt, isValid){
    console.log(`Welcome to Trivia! \n
You will be prompted with a trivia question. Type the number 
that corresponds to the answer you would like to choose
and press 'return' \n
Are you ready? \n`)
    let userInput = input.question("Type 'Y' then 'return' to begin: ");
    if(userInput != 'Y'){
      return startQuiz() 
    }else
        displayQuestion();
        

function displayQuestion(){
for (let i = 0; i < questions.length; i++){
    let question = questions[i].question;
    let correctAnswer = questions[i].correct;
    let choicesArray = questions[i].incorrect;
    choicesArray.push(correctAnswer)
    console.log(`--- \n QUESTION: ${question} \n`)
    
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
    var result = choicesArray.shuffle();
    for (let k = 0; k < result.length; k++){
        console.log(k+1 + ": " + result[k])
    }
    console.log(`-----`)
    console.log(`Correct Answer: ${correctAnswer}`)
}
}

}

startQuiz();