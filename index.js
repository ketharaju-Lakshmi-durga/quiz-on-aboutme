const chalk=require("chalk")
const emoji = require('node-emoji');
const boom = emoji.get('boom');
const wave=emoji.get("wave");
const smiley=emoji.get("smiley")
const v=emoji.get("v")
const wink=emoji.get("wink")
const fire=emoji.get("fire")
const clap=emoji.get("clap")
const pumpkin=emoji.get('jack_o_lantern')
const fireworks=emoji.get('fireworks')
const relaxed=emoji.get('smiley_cat')
const yum=emoji.get("yum")
const stuck_out_tongue_winking_eye=emoji.get('stuck_out_tongue_winking_eye')
const heart_eyes=emoji.get('heart_eyes')
var readlineSync=require("readline-sync")
console.log(boom,boom,boom);
console.log(chalk.keyword('purple').italic("Hi!"+wave+" "+ wave+" "+ wave+" "))
console.log(chalk.keyword('purple').dim("This is the quiz to test how much you know about me ")+wink)

console.log(chalk.green("-----------------------------"))
console.log(chalk.green("        Rules"))
console.log(chalk.hex('#ff1a66').bold("1.For each correct answer 1 point is awarded\n2.No negative marking"))
console.log(chalk.green("-----------------------------\n"))

var userName=readlineSync.question(chalk.hex('#ff8080').bold("Please enter your name")+smiley+" :")
console.log("------------------------------------")
var score=0;
function playGame(ques,ans,a1,a2,a3,a4)
{ console.log(chalk.hex('#ff1a75').bold(ques))
console.log("\n")
   for(var i=2;i<arguments.length;i++)
{ 
  
    console.log(i-1+"."+chalk.hex('#ffdb4d').bold(arguments[i])+"\n")
  

}
  var userAns=readlineSync.questionInt(chalk.hex('#884dff').bold("enter ur the option  :"));
  if(arguments[userAns+1]===arguments[1])
  {
    score=score+1
    console.log(chalk.hex('#80ff00').bold("wow!Its correct good"))

  }
  else{
    console.log(chalk.hex('#ff0000').bold("Incorrect!Nice attempt !"))
  }
  console.log("________________________________________")
}//playgame

  var knowMe=[
    {
      question:"Where do i live?",
      ans:"Guntur",
      answers:["Guntur","Nellore","Vijayawada","Chittore"],
    },
    {
      question:"What is the month of my birthday?",
      ans:"September",
      answers:["january","May","September","August"],
    },
    {
      question:"What is my favarite Icecream flavour?",
      ans:"venilla",
      answers:["Butterscotch","venilla","Chocolate","strawberry"]
    },
    {
      question:"How Young am I? "+stuck_out_tongue_winking_eye,
      ans:"21",
      answers:["21","22","20","23"]
    },
    {
      question:"Which Sport I often play?",
      ans:"Batminton",
      answers:["Batminton","table-tennis","Vollyball","Football"]
    },
    {
      question:"who is my favorite marvel character?",
      ans:"Thor",
      answers:["Hulk","Captain America","Iron man","Thor"]
    },
    {
      question:"Movies I like to watch?",
      ans:"Comedy",
      answers:["Horror","Thriller","Comedy","Romantic"]
    },
    {
      question:"Where am I studying currently?",
      ans:"Chennai",
      answers:["Bengaluru","Chennai","Hyderabad","Kerala"],
    },
    {
      question:"My favorite Hillstation? "+heart_eyes,
      ans:"Araku",
      answers:["Ooty","Manali","Araku","Shimla"]
    },
    {
      question:"My favorite Desserts? "+yum,
      ans:"Rasgulla",
      answers:["Rasgulla","Gulab Jamun","kaju barfi","Modak"],
    }]
  for(var i=0;i<knowMe.length;i++)
  {
    var current=knowMe[i];
    playGame(current.question,current.ans,current.answers[0],current.answers[1],current.answers[2],current.answers[3]);

  }
  
  console.log(chalk.hex('#ff1a75').bold("YAAAY!you scored :"+score)+" "+clap+" "+clap)
  
var highest=[
  {
  name:"durga",
  score:4,
  }]

console.log("\n")

console.log(chalk.green("-------------HIGHEST SCORES ARE----------"))
for(var i=0;i<highest.length;i++)
{ var current=highest[i]
if(score>current.score)
{
  console.log(chalk.blue("Congrats!you have beaten "+current.name+" "+v)+" "+clap+" "+clap)
  console.log(chalk.blue("Name :")+chalk.keyword('purple').bold(userName))
  console.log(chalk.blue("score :")+chalk.keyword('purple').bold(score+"/10"))
  current.name=userName;
  current.score=score;
}
else{
console.log(chalk.blue("Name :")+chalk.keyword('purple').bold(current.name))
console.log(chalk.blue("score :")+chalk.keyword('purple').bold(current.score+"/10"))
console.log("______________________________________")
}
}
console.log("\n");
console.log("\n")
console.log(chalk.hex('#ff1a75').bold("THANK YOU FOR PLAYING ")+smiley)
console.log(boom+" "+boom+" "+" "+boom)
console.log("\n")

