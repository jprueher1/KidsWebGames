function main() { 

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


        num1.innerHTML = firstNum;
        num2.innerHTML = secondNum;
        multiplicationArea.style.display = "";
        divisionArea.style.display = "none";
    }

    // Gets next division problem
    function getNextDivisionProblem() {
        firstNum = getRandomInt(min, max);
        secondNum = getRandomInt(min2,max2);
        firstNum = firstNum * secondNum;


        firstNum*= secondNum;

        //operator.innerHTML = "%";
        num3.innerHTML = firstNum;
        num4.innerHTML = secondNum;
        multiplicationArea.style.display = "none";
        divisionArea.style.display = "";
    }

    // initialize variables
    var min;
    var max;
    var min2;
    var max2;
    var num1 = document.getElementById("problem1");
    var num2 = document.getElementById("problem2");
    var num3 = document.getElementById("problem3");
    var num4 = document.getElementById("problem4");
    var firstNum = 0;
    var secondNum = 0;
    var firstGradeRadio = document.querySelector("#firstGrade");
    var secondGradeRadio = document.querySelector("#secondGrade");
    var thirdGradeRadio = document.querySelector("#thirdGrade");
    var answer = 0;
    var answerBtn = document.getElementById("answerBtn");
    var answerBtnDivide = document.getElementById("answerBtnDivide");
    var userGuess = 0;
    var questionNum = 1;
    var inputArea = document.getElementById("userAnswer");
    var inputAreaDivide = document.getElementById("userAnswerDivide");
    var output = document.getElementById("feedbackOutput");
    var outputDivide = document.getElementById("feedbackOutputDivide");
    var multiplicationArea = document.querySelector("th#gamePlay.multi");
    var divisionArea = document.querySelector("th#gamePlay.divide");
    var correctSound = new Audio("sounds/correct.wav");

    var correctAnswerMsg = ["Awesome!", "You're really good at this!", "Wonderful!", "You sure know your math"];
    var wrongAnswerMsg = ["Keep trying, you'll get it", "So close, try again!", "Think hard, you'll get it!"];


    multiplicationArea.style.display = "none";
    divisionArea.style.display = "none";
    // Changes values depending on which grade level is selected
    firstGradeRadio.onchange = function() {
        if(firstGradeRadio.checked) {
            min = 1;
            max = 10;
            min2 = 1;
            max2 = 10;

            if(questionNum % 2 || questionNum == 0) {
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

            if(questionNum % 2 || questionNum == 0) {
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

            if(questionNum % 2 || questionNum == 0) {
                getNextMultiplicationProblem();
            } else {
                getNextDivisionProblem();
            }
        }
    };

    answerBtn.onclick = function(e){ 

        // Get users guess
        userGuess = Number(inputArea.value);

        // Figure answer depending if multiplication or division problem.
        if(questionNum % 2 || questionNum) {
            answer = firstNum * secondNum;
        } else {
            answer = firstNum / secondNum;
        }

        // If user is correct
            // OUtput correct answer message
            // Add to current score
            // Add one to question number
        if(checkAnswer(userGuess, answer)) {
            outputDivide.innerHTML = correctAnswerMsg[getRandomInt(0, correctAnswerMsg.length -1)];
            correctSound.play();
            questionNum+= 1;

            // Decide if next problem is multiplication or division.

            getNextDivisionProblem();


        // Else
            // Output wrong answer message
        } else {
           outputDivide.innerHTML = wrongAnswerMsg[getRandomInt(0, wrongAnswerMsg.length -1)];
        }
        // Reset answer area to empty string.
        inputArea.value = "";

    };  

    answerBtnDivide.onclick = function(e){ 
        console.log("hello");
        // Get users guess
        userGuess = Number(inputAreaDivide.value);

        // Figure answer depending if multiplication or division problem.
            answer = firstNum / secondNum;

        console.log(answer);
        // If user is correct
            // OUtput correct answer message
            // Play correct answer sound.
            // Add one to question number
        if(checkAnswer(userGuess, answer)) {
            output.innerHTML = correctAnswerMsg[getRandomInt(0, correctAnswerMsg.length -1)];
            correctSound.play();
            questionNum+= 1;

            // Decide if next problem is multiplication or division.

            getNextMultiplicationProblem();

        // Else
            // Output wrong answer message
        } else {
           output.innerHTML = wrongAnswerMsg[getRandomInt(0, wrongAnswerMsg.length -1)];
        }
        // Reset answer area to empty string.
        inputAreaDivide.value = "";

    };

}
main();