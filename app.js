// Command Line Trivia Game

const fs = require('fs');

let rawdata = fs.readFileSync('Apprentice_TandemFor400_Data.json');
let questions = JSON.parse(rawdata);
console.log(questions);

for (i = 0; i < 5; i++){
    console.log(`Q: ${questions[i].question}`)
}
