const readline = require('readline-sync');
const chalk = require('chalk');

// Exercise 01
console.log("Ex 01 : Print Name to console:\nPrakhar Varshney");
console.log(chalk.red("----------------\n"));

// Exercise 02
var name = readline.question("Ex 02 : Asking name from user:\nWhat is your name?\n");
console.log(chalk.yellowBright(name));
console.log(chalk.red("----------------\n"));

// Exercise 03
console.log("Ex 03 : Show Welcome message:\nWelcome " + chalk.cyan(name));
console.log(chalk.red("----------------\n"));

// Exercise 04
var name2 = readline.question(chalk.green("Ex 04 : Input your name.\n"));
console.log("Welcome "+ name2 + " to exercise 04");
console.log(chalk.red("----------------\n"));

// Exercise 05
var age = readline.question("Ex 05 : Checking Right or Wrong Answer\n" + chalk.yellowBright("Is my age greater than 25?(Y/N)\n"));
if(age == "Y")
  console.log("Wrong");
else
  console.log("Right");
console.log(chalk.red("----------------\n"));

// Exercise 06
var city = readline.question("Ex 06 : Increment Score if Right Answer :\n" + chalk.red("what is my hometown?\n"));
var score = 0;
if(city.toUpperCase() == "JAIPUR" ){
  console.log(chalk.cyan("Correct"));
  score += 1;
   console.log(chalk.yellow("Score is "+ score));
}
else{
  console.log(chalk.redBright("Wrong ")+"I live in Jaipur.");
  console.log(chalk.yellow("Score is "+ score));
}
console.log(chalk.red("----------------\n"));

// Exercise 07
function addition(a,b){
  var c = a+b;
  return c;
}
console.log("Ex 07 : Addition of two numbers using function :\n" + chalk.yellowBright("Addition of 2 and 5 is "+ addition(2,5)));
console.log("\n");
console.log(chalk.red("----------------\n"));

// Exercise 08
function checkAnswer(question,Answer){
  var ansEx08 = readline.question(question);
  if(ansEx08.toUpperCase() == rightAnsEx8.toUpperCase())
    console.log(chalk.green("Correct"));
  else
    console.log(chalk.redBright("Wrong"));
}
var quesEx8 = console.log(chalk.yellowBright("Ex 08 : Is 23 a prime Number.(Y/N)"));
var rightAnsEx8 = "Y"
checkAnswer(quesEx8,rightAnsEx8);
console.log(chalk.red("----------------\n"));

// Exercise 09
console.log("Ex 09 : Printing Name 5 Times :")
for(var i = 1; i<=5; i++){
  console.log(chalk.magenta(i + " PV"))
}
console.log(chalk.red("----------------\n"));

// Execise 10 and 11
console.log("Ex 10 & Ex 11 : List and print Grocery items to buy :\n" + chalk.yellowBright("My grocery list :"));
var listEx10 = ["potato", "milk", "papaya", "mangos"]
for(var ex10 = 0; ex10<listEx10.length; ex10++){
  console.log(listEx10[ex10]);
}
console.log(chalk.red("----------------\n"));

// Exercise 12
console.log(chalk.yellowBright("Ex 12 : List of Superheroes"));
var ironMan = {
  "Real name" : "Tony Stark",
  "Super-power" : "Intelligence"
}
var hulk = {
  "Real name" : "Bruce Banner",
  "Super-power" : "Gamma-rays"
}
var captainAmerica = {
  "Real name" : "Chris Evans",
  "Super-power" : "Athletism"
}
var superheroes = [ironMan,hulk,captainAmerica];
for(var ex12 = 0; ex12 < superheroes.length; ex12++){
  console.log(superheroes[ex12]);
}
console.log(chalk.red("----------------\n"));

// Exercise 13
console.log(chalk.yellowBright("Ex 13 : List of Questions\n"));
var ex13Ques1 = {
  question : "Where do I live?\n",
  answer : "Jaipur"
};
var ex13Ques2 = {
  question : "What is the name of My favorite Superhero?\n",
  answer : "IronMan"
};
var ex13Ques3 = {
  question : "What is the name of your favorite Anime?\n",
  answer : "Dragon Ball Super"
};
var ex13Ques4 = {
  question : "Which is my favorite sitcom series?",
  answer : "FRIENDS"
};
console.log(chalk.red("----------------\n"));

// Exercise 14
console.log(chalk.yellowBright("Ex 14 : Putting it all together!"));
var ex14QuesBank = [ex13Ques1,ex13Ques2,ex13Ques3];
function quizEx14(question, answer){
  var userAnswer = readline.question(question);
  if(userAnswer.toUpperCase() == answer.toUpperCase())
    return true;
  else
    return false;
}
var score = 0;
for(var ex14 = 0; ex14<ex14QuesBank.length; ex14++){
  var current = ex14QuesBank[ex14];
  if(quizEx14(current.question,current.answer) == true){
    score+=3;
    console.log(chalk.greenBright("Correct"));
  }
  else{
    score -=1;
    console.log(chalk.redBright("Wrong"));
  }
}
console.log(chalk.red("----------------\n"));

// Execise 15
console.log(chalk.yellowBright("Ex 15: Printing the score to user"));
console.log(chalk.yellow("Your Score is = " + score));
const leaderBoard = [
  {
    name : "Mom",
    score : "10"
  },
  {
    name : "Prakhar Varshney",
    score : "9"
  },
  {
    name : "Dummy",
    score : "5"
  }
];
for(var ex15 = 0 ; ex15<leaderBoard.length; ex15++){
  var curr = leaderBoard[ex15];
  console.log(curr.name + " = " + curr.score); 
}
console.log(chalk.red("--------END---------\n"));
