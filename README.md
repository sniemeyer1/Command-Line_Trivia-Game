# Command Line Trivia Game

A simple 10-question command-line trivia game.

I created this application as a coding challenge for a Software Engineering apprenticeship at [Tandem](https://madeintandem.com/contact/chicago/).

Here were the guidelines:

![Goal](/assets/challenge-goal.jpg)

![Assumptions and Criteria](/assets/challenge-criteria.jpg)

## Installation and Setup

```bash
git clone https://github.com/sniemeyer1/Command-Line_Trivia-Game.git
cd Command-Line-Trivia_Game
npm init
npm i readline-sync fs
node app.js
```

## Game Play

To exit program, press:

```bash
^C
```

To start a game, input:

```bash
node app.js
```

```bash
Welcome to Trivia!

You will be prompted with a trivia question.
Type in the number that corresponds to 
the answer you would like to choose.
Each round asks 10 questions.

Are you ready?

Type 'Y' then `return` to begin: 
```

The questions display one at a time. Once the user inputs their answer, the console will print the user's answer, whether the answer was correct or not, their updated score, and instructions to press return for the next question. For example:

```bash
QUESTION 3: According to Greek mythology, who was the first woman on Earth? 

1: Eve 
 
2: Hera 
 
3: Pandora 

Your Answer:
```

```bash
Your Answer: 3
CORRECT!
User Score: 1
Press return for next question
```

After answering the 10th question, the round is over, and the user is updated with their final score. They are given the option to play again. 

## Technologies Used

* JavaScript
* Node.JS
* JSON

## Dependencies

* readline-sync
* fs

## Additional Features

* Input validation
* Updated score after every question answered

## Future Improvements

* Add unit tests with Jasmine.
* Display different feedback at the end of the game, depending on their score.
* Make a trivia game with a UI, using React
