// Generates a random integer inclusive of both min and max.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Checks user guess against calculated answer
function checkAnswer(guess, answer) {
    if(answer == guess) {
        return true;
    } else {
        return false;
    }
}

// Gets next multiplaction problem
function getNextMultiplicationProblem(){
    firstNum = getRandomInt(min, max);
    secondNum = getRandomInt(min2,max2);
    
    operator.innerHTML = "x";
    num1.innerHTML = firstNum;
    num2.innerHTML = secondNum;
}

// Gets next division problem
function getNextDivisionProblem() {
    firstNum = getRandomInt(min, max);
    secondNum = getRandomInt(min2,max2);
    firstNum = firstNum * secondNum;
    
    
    while(firstNum < secondNum) {
        secondNum = getRandomInt(min,max);
    }
    
    operator.innerHTML = "%";
    num1.innerHTML = firstNum;
    num2.innerHTML = secondNum;
}

// initialize variables
var currentScore = 0;
var min;
var max;
var min2;
var max2;
var num1 = document.getElementById("problem1");
var num2 = document.getElementById("problem2");
var firstNum = 0;
var secondNum = 0;
var operator = document.querySelector("#operator");
var firstGradeRadio = document.querySelector("#firstGrade");
var secondGradeRadio = document.querySelector("#secondGrade");
var thirdGradeRadio = document.querySelector("#thirdGrade");
var answer = 0;
var answerBtn = document.getElementById("answerBtn");
var userGuess = 0;
var questionNum = 1;
var inputArea = document.getElementById("userAnswer");
var output = document.getElementById("feedbackOutput");

var correctAnswerMsg = ["Awesome!", "You're really good at this!", "Wonderful!", "You sure                          know your math"];
var wrongAnswerMsg = ["Keep trying, you'll get it", "So close, try again!", "Think hard,                          you'll get it!"];

// Changes values depending on which grade level is selected
firstGradeRadio.onchange = function() {
    if(firstGradeRadio.checked) {
        min = 1;
        max = 10;
        min2 = 1;
        max2 = 10;
        
        if(questionNum % 2) {
            getNextMultiplicationProblem();
        } else {
            getNextDivisionProblem();
        }
    }
};

secondGradeRadio.onchange = function() {
    if(secondGradeRadio.checked) {
        min = 10;
        max = 100;
        min2 = 1;
        max2 = 10;
        
        if(questionNum % 2) {
            getNextMultiplicationProblem();
        } else {
            getNextDivisionProblem();
        }
    }
};

thirdGradeRadio.onchange = function() {
    if(thirdGradeRadio.checked) {
        min = 10;
        max = 100;
        min2 = 1;
        max2 = 10;
        
        if(questionNum % 2) {
            getNextMultiplicationProblem();
        } else {
            getNextDivisionProblem();
        }
    }
};
    
answerBtn.onclick = function(e){ 
    
    // Get users guess
    userGuess = Number(document.getElementById("userAnswer").value);
    
    // Figure answer depending if multiplication or division problem.
    if(questionNum % 2) {
        answer = firstNum * secondNum;
    } else {
        answer = firstNum / secondNum;
    }
    
    // If user is correct
        // OUtput correct answer message
        // Add to current score
        // Add one to question number
    if(checkAnswer(userGuess, answer)) {
        output.innerHTML = correctAnswerMsg[getRandomInt(0, correctAnswerMsg.length -1)];
        currentScore+= 10;
        questionNum+= 1;
        
        // Decide if next problem is multiplication or division.
        if(questionNum % 2) {
            getNextMultiplicationProblem();
        } else {
            getNextDivisionProblem();
        }
    // Else
        // Output wrong answer message
    } else {
       output.innerHTML = wrongAnswerMsg[getRandomInt(0, wrongAnswerMsg.length -1)];
    }
    // Reset answer area to empty string.
    inputArea.value = "";
     
};  