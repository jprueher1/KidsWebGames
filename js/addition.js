// Generates a random integer inclusive of both min and max.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkAnswer(guess, answer) {
    if(answer == guess) {
        return true;
    } else {
        return false;
    }
}

function getNextProblem(){
    firstNum = getRandomInt(min, max);
    secondNum = getRandomInt(min,max);
    
    num1.innerHTML = firstNum;
    num2.innerHTML = secondNum;
}

var currentScore = 0;
var question1 = 0;
var question2 = 0;
var guess = 0;
var playGame = true;
var num1 = document.getElementById("problem1");
var num2 = document.getElementById("problem2");
var firstNum = 0;
var secondNum = 0;
var firstGradeRadio = document.querySelector("#firstGrade");
var secondGradeRadio = document.querySelector("#secondGrade");
var thirdGradeRadio = document.querySelector("#thirdGrade");
var answer = 0;
var answerBtn = document.getElementById("answerBtn");
var userGuess = 0;
var output = document.getElementById("feedbackOutput");

var correctAnswerMsg = ["Awesome!", "You're really good at this!", "Wonderful!", "You sure know your math!"];
var wrongAnswerMsg = ["Keep trying, you'll get it", "So close, try again!", "Think hard, you'll get it!"];

firstGradeRadio.onchange = function() {
    if(firstGradeRadio.checked) {
        min = 0;
        max = 10;
        
        firstNum = getRandomInt(min, max);
        secondNum = getRandomInt(min, max);
        
        num1.innerHTML = firstNum;
        num2.innerHTML = secondNum;
    }
}

secondGradeRadio.onchange = function() {
    if(secondGradeRadio.checked) {
        min = 10;
        max = 100;
        
        firstNum = getRandomInt(min, max);
        secondNum = getRandomInt(min, max);
        
        num1.innerHTML = firstNum;
        num2.innerHTML = secondNum;
    }
}

thirdGradeRadio.onchange = function() {
    if(thirdGradeRadio.checked) {
        min = 100;
        max = 1000;
        
        firstNum = getRandomInt(min, max);
        secondNum = getRandomInt(min, max);
        
        num1.innerHTML = firstNum;
        num2.innerHTML = secondNum;
    
    }
}
    
answerBtn.onclick = function(e){ 
    
    userGuess = Number(document.getElementById("userAnswer").value);
    answer = firstNum + secondNum;
    
    console.log(answer);
   if(checkAnswer(userGuess, answer)) {
       output.innerHTML = correctAnswerMsg[getRandomInt(0, correctAnswerMsg.length -1)]
       currentScore+= 10;
       getNextProblem();
   } else {
       output.innerHTML = wrongAnswerMsg[0, wrongAnswerMsg.length -1];
   }
}   
    








