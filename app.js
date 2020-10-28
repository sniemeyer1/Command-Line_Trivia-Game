// Command Line Trivia Game

const fs = require('fs');

let rawdata = fs.readFileSync('Apprentice_TandemFor400_Data.json');
let questions = JSON.parse(rawdata);

function displayQuestion(){
for (let i = 0; i < questions.length; i++){
    let question = questions[i].question;
    let correctAnswer = questions[i].correct;
    let choicesArray = questions[i].incorrect;
    choicesArray.push(correctAnswer)
    console.log(`--- \n QUESTION: ${question} \n`)
    
    function shuffle(anArray){
        var j = anArray.length, temp, x;
        while (j > 0) {
            x = Math.floor(Math.random() * j);
            j--;
            temp = anArray[j]
            anArray[j] = anArray[x];
            anArray[x] = temp;
        }
        return anArray
    }
    console.log(shuffle(choicesArray))
}
}

displayQuestion();