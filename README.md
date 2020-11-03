# Command Line Trivia Game

A simple 10-question command-line trivia game.

I created this application as a coding challenge for a Software Engineering apprenticeship at [Tandem](https://madeintandem.com/contact/chicago/).

Here were the guidelines:

[Goal](/assets/challenge-goal.jpg)

[Assumptions and Criteria](/assets/challenge-criteria.jpg)

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
Type in the number that corresponds to the answer you
would like to choose and then press 'return'

Are you ready?

Type 'Y' then press return to begin: Y
```

The first question displays. Once the user inputs their answer, the console will print the answer, if the answer was correct or not, your score, and instructions to press return for the next question. For example:

```bash
Your Answer: 3
CORRECT!
User Score: 1
Press return for next question
```

After answering the 10th question, the game ends, and the user is updated with their final score.

## Technologies Used

* JavaScript
* Node.JS
* JSON

## Packages

* readline-sync
* fs

## Future Improvements

* Add a validation function
* Add unit tests with Jasmine.
* Display different feedback at the end of the same, depending on their score.
* Make a trivia game with a UI, using React
