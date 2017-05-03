// Generates a random integer inclusive of both min and max.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Checks the user's guess against the actual answer and returns true/false.
function checkAnswer(guess, answer) {
    if(answer == guess) {
        return true;
    } else {
        return false;
    }
}

// Gets the next division problem.
function getNextProblem() {
    firstNum = getRandomInt(min, max);
    secondNum = getRandomInt(min2,max2);
    // Make sure the numbers are always divisible.
    firstNum*= secondNum;
    
    num1.innerHTML = firstNum;
    num2.innerHTML = secondNum;
    
}

// Initialize variables
var currentScore = 0;
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
var inputArea = document.getElementById("userAnswer");
var output = document.getElementById("feedbackOutput");

var correctAnswerMsg = ["Awesome!", "You're really good at this!", "Wonderful!", "You sure                          know your math"];
var wrongAnswerMsg = ["Keep trying, you'll get it", "So close, try again!", "Think hard,                          you'll get it!"];

firstGradeRadio.onchange = function() {
    if(firstGradeRadio.checked) {
        min = 2;
        max = 10;
        min2 = 2;
        max2 = 10;
        
        getNextProblem();
        
    }
};

secondGradeRadio.onchange = function() {
    if(secondGradeRadio.checked) {
        min = 5;
        max = 50;
        min2 = 2;
        max2 = 10;
        
        getNextProblem();
        

    }
};

thirdGradeRadio.onchange = function() {
    if(thirdGradeRadio.checked) {
        min = 10;
        max = 100;
        min2 = 2;
        max2 = 10;
        
        getNextProblem();
    
    }
};
    
answerBtn.onclick = function(e){ 
    // Get user guess
    userGuess = Number(document.getElementById("userAnswer").value);
    // Calculate answer
    answer = firstNum / secondNum;
    // Compare guess to answer
    // If anser is correct 
        // output correct message
        // add to current score
        // get next problem
    if(checkAnswer(userGuess, answer)) {
        output.innerHTML = correctAnswerMsg[getRandomInt(0, correctAnswerMsg.length -1)];
        currentScore+= 10;
        getNextProblem();
    
    } else {
        output.innerHTML = wrongAnswerMsg[getRandomInt(0, wrongAnswerMsg.length -1)];
    }
    // Reset input area to empty string
    inputArea.value = "";
    
};  