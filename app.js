// Command Line Trivia Game

const fs = require('fs');

let rawdata = fs.readFileSync('Apprentice_TandemFor400_Data.json');
let questions = JSON.parse(rawdata);
//console.log(questions);

for (let i = 0; i < questions.length; i++){
    let question = questions[i].question;
    let correctAnswer = questions[i].correct;
    let choices = questions[i].incorrect;
    choices.push(correctAnswer)
    console.log(`${question} \n`)
    //console.log(choices)
    for (let i = 0; i < choices.length; i++) {
        console.log(`${choices[i]} \n`);
     }
    // for (var j in choices){
    //     console.log(choices[j])
    // }
    // for (let j = 0; j < choices.length; i++){
    //     console.log(`A: ${choices[j]}`)
    // }
    //console.log(choices)
    // console.log(`Q:${question} \n
    // Choices: ${choices} \n
    // CA: ${correctAnswer}`)
}
