var readlineSync = require('readline-sync');
const chalk = require('chalk');

var people = readlineSync.question("What's your name? ");

console.log("Welcome " + people + " ! how well do you know about cricket? lets check ");
var score = 0 ;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bgGreen.black("You are absolutely right!"));
    score = score + 1;
  } else {

    console.log(chalk.bgRed.white("Ops! Wrong answer."));
  }
  console.log(chalk.bgCyan("Your Score = " + score));
  console.log("---------------------");

}

var questions = [{
  question : "In which year India won the worldcup ?  ",
  answer : "2011"
}, {
  question : "First batsman to score 200 in Odi format?  ",
  answer : "Sachin Tendulker"
}, {
  question : "Captain cool of india?  ",
  answer : "MS Dhoni"
}, {
  question : "Highest Batsman score to ever reached by whom?  ",
  answer : "Rohit sharma"
}];

for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.bgMagenta("Your Total score is " + score + " ! Thankyou so much for taking this quiz"));
