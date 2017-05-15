function main() {
    // Generates a random integer inclusive of both min and max.
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Checks user's guess against calculated answer.
    function checkAnswer(guess, answer) {
        if(answer == guess) {
            return true;
        } else {
            return false;
        }
    }

    // Gets next addition problem.
    function getNextAdditionProblem(){
        firstNum = getRandomInt(min, max);
        secondNum = getRandomInt(min,max);

        operator.innerHTML = "+";
        num1.innerHTML = firstNum;
        num2.innerHTML = secondNum;
    }

    // Gets next subtraction problem.
    function getNextSubtractionProblem() {
        firstNum = getRandomInt(min, max);
        secondNum = getRandomInt(min,max);


        while(firstNum < secondNum) {
            secondNum = getRandomInt(min,max);
        }

        operator.innerHTML = "-";
        num1.innerHTML = firstNum;
        num2.innerHTML = secondNum;
    }

    // Initialize variables
    var min;
    var max;
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
    var correctSound = new Audio("sounds/correct.wav");

    var correctAnswerMsg = ["Awesome!", "You're really good at this!", "Wonderful!", "You sure                          know your math"];
    var wrongAnswerMsg = ["Keep trying, you'll get it", "So close, try again!", "Think hard,                          you'll get it!"];

    // Decide problem bounds depending on grade level selected.
    firstGradeRadio.onchange = function() {
        if(firstGradeRadio.checked) {
            min = 0;
            max = 10;

            firstNum = getRandomInt(min, max);
            secondNum = getRandomInt(min, max);

            num1.innerHTML = firstNum;
            num2.innerHTML = secondNum;
        }
    };

    secondGradeRadio.onchange = function() {
        if(secondGradeRadio.checked) {
            min = 10;
            max = 100;

            firstNum = getRandomInt(min, max);
            secondNum = getRandomInt(min, max);

            num1.innerHTML = firstNum;
            num2.innerHTML = secondNum;
        }
    };

    thirdGradeRadio.onchange = function() {
        if(thirdGradeRadio.checked) {
            min = 100;
            max = 1000;

            firstNum = getRandomInt(min, max);
            secondNum = getRandomInt(min, max);

            num1.innerHTML = firstNum;
            num2.innerHTML = secondNum;

        }
    };

    answerBtn.onclick = function(e){ 

        // Get the user's guess
        userGuess = Number(document.getElementById("userAnswer").value);

        // IF problem was addition
            // calculate answer for addition
        // ELSE
            // calculate answer for subtraction
        if(questionNum % 2) {
            answer = firstNum + secondNum;
        } else {
            answer = firstNum - secondNum;
        }

        // IF answer was correct
            // output correct answer message
            // play correct answer sound
            // add one to question number
            // IF last question was subtraction
                // Get next addition problem
            // ELSE
                // Get next subraction problem
        // ELSE
            // output wrong answer message.
        if(checkAnswer(userGuess, answer)) {
            output.innerHTML = correctAnswerMsg[getRandomInt(0, correctAnswerMsg.length -1)];
            correctSound.play();
            questionNum+= 1;

            if(questionNum % 2) {
               getNextAdditionProblem();
            } else {
               getNextSubtractionProblem();
            }

        } else {
            output.innerHTML = wrongAnswerMsg[getRandomInt(0, wrongAnswerMsg.length -1)];
        }
        // Reset input area to empty string
        inputArea.value = "";

    };   
}
main();