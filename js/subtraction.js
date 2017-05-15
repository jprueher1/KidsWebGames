function main() {   

    // Generates a random integer inclusive of both min and max.
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Checks user's guess against calculated answer. Returns true or false
    function checkAnswer(guess, answer) {
        if(answer == guess) {
            return true;
        } else {
            return false;
        }
    }

    // Gets the next subtraction problem
    function getNextProblem(){
        firstNum = getRandomInt(min, max);
        secondNum = getRandomInt(min,max);

        // While the first number is smaller than second number
            // Generate new second number.
        while(firstNum < secondNum) {
            secondNum = getRandomInt(min,max);
        }

        // Display problem to user.
        num1.innerHTML = firstNum;
        num2.innerHTML = secondNum;
    }

    // initialize variables
    var min;
    var max;
    var num1 = document.getElementById("problem1");
    var num2 = document.getElementById("problem2");
    var firstNum = 0;
    var secondNum = 0;
    var firstGradeRadio = document.querySelector("#firstGrade");
    var secondGradeRadio = document.querySelector("#secondGrade");
    var thirdGradeRadio = document.querySelector("#thirdGrade");
    var answer = 0;
    var answerBtn = document.getElementById("answerBtn");
    var inputArea = document.getElementById("userAnswer");
    var userGuess = 0;
    var output = document.getElementById("feedbackOutput");
    var correctSound = new Audio("sounds/correct.wav");

    var correctAnswerMsg = ["Awesome!", "You're really good at this!", "Wonderful!", "You sure                          know your math"];
    var wrongAnswerMsg = ["Keep trying, you'll get it", "So close, try again!", "Think hard,                          you'll get it!"];

    // Decide what bounds are depending on grade level and generate a new problem.
    firstGradeRadio.onchange = function() {
        if(firstGradeRadio.checked) {
            min = 0;
            max = 10;

            getNextProblem();

        }
    };

    secondGradeRadio.onchange = function() {
        if(secondGradeRadio.checked) {
            min = 10;
            max = 100;

            getNextProblem();

        }
    };

    thirdGradeRadio.onchange = function() {
        if(thirdGradeRadio.checked) {
            min = 100;
            max = 1000;

            getNextProblem();

        }
    };

    answerBtn.onclick = function(e){ 

        // Get user guess.
        userGuess = Number(document.getElementById("userAnswer").value);
        // Calculate correct answer.
        answer = firstNum - secondNum;

        // If the answer was correct
            // Output correct answer message.
            // Play correct answer sound.
            // Get the next problem.
        if(checkAnswer(userGuess, answer)) {
           output.innerHTML = correctAnswerMsg[getRandomInt(0, correctAnswerMsg.length -1)];
           correctSound.play();
           getNextProblem();
        // Else
            // Output wrong answer message.
        } else {
           output.innerHTML = wrongAnswerMsg[getRandomInt(0, wrongAnswerMsg.length -1)];
        }

        // Reset the input area to empty string.
        inputArea.value = "";
    };   

}
main();