// Generates a random integer inclusive of both min and max.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Checks uswer guess against calculated answer and returns true or false.
function checkAnswer(guess, answer) {
    if(answer == guess) {
        return true;
    } else {
        return false;
    }
}

// Gets the next problem
function getNextProblem(){
    firstNum = getRandomInt(min, max);
    secondNum = getRandomInt(min2,max2);
    
    num1.innerHTML = firstNum;
    num2.innerHTML = secondNum;
}

// Initialize variables
var currentScore = 0;
var min;
var max;
var min2;
var max2;
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

// Decide problem bounds depending on grade level selected.
firstGradeRadio.onchange = function() {
    if(firstGradeRadio.checked) {
        min = 0;
        max = 10;
        min2 = 0;
        max2 = 10;
        
        getNextProblem();
    }
};

secondGradeRadio.onchange = function() {
    if(secondGradeRadio.checked) {
        min = -10;
        max = 0;
        min2 = 1;
        max2 = 10;
        
        getNextProblem();
    }
};

thirdGradeRadio.onchange = function() {
    if(thirdGradeRadio.checked) {
        min = 100;
        max = 1000;
        min2 = 1;
        max2 = 10;
        
        
        getNextProblem();
    
    }
};
    
answerBtn.onclick = function(e){ 
    
    // Get user's guess
    userGuess = Number(document.getElementById("userAnswer").value);
    // Calculate correct answer.
    answer = firstNum * secondNum;
    
    // IF user's answer was correct
        // Output correct answer message.
        // Add to current score.
        // Get the next problem.
    if(checkAnswer(userGuess, answer)) {
        output.innerHTML = correctAnswerMsg[getRandomInt(0, correctAnswerMsg.length -1)];
        currentScore+= 10;
        getNextProblem();
    // ELSE 
        // Output wrong answer message.
    } else {
        output.innerHTML = wrongAnswerMsg[getRandomInt(0, wrongAnswerMsg.length -1)];
    }
    
    // Reset input area to empty string.
    inputArea.value = "";
    
};   
    