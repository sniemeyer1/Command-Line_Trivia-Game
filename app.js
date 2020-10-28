// Command Line Trivia Game

const fs = require('fs');

let rawdata = fs.readFileSync('Apprentice_TandemFor400_Data.json');
let questions = JSON.parse(rawdata);
console.log(questions);

for (i = 0; i < questions.length; i++){
    let question = questions[i].question;
    let correctAnswer = questions[i].correct;
    let choices = questions[i].incorrect;
    choices.push(correctAnswer)
    console.log(`Q:${question}
    Choices: ${choices}

    CA: ${correctAnswer}`)
}
//let answerArray = questions[i].