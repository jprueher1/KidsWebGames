function main() {    

    // Generates a random integer inclusive of both min and max.
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Checks user guess against actual answer value, returns true/false.
    function checkAnswer(guess, answer) {
        if(answer == guess) {
            return true;
        } else {
            return false;
        }
    }

    // Gets the next  problem, displays image.
    function getNextProblem(){
        // Assign random image to word variable from Array of words for selected grade level.
        image = images[getRandomInt(0, images.length - 1)];
        imgDisplay.src = "images/" + image + ".png";

    }

    // Initialize variables.
    var imgDisplay = document.getElementById("problem1");
    var firstGradeRadio = document.querySelector("#firstGrade");
    var secondGradeRadio = document.querySelector("#secondGrade");
    var answer = "";
    var answerBtn = document.getElementById("answerBtn");
    var userGuess = "";
    var inputArea = document.getElementById("userAnswer");
    var output = document.getElementById("feedbackOutput");
    var image = "";
    var images = [];
    var correctSound = new Audio("sounds/correct.wav");


    var correctAnswerMsg = ["Awesome!", "You're really good at this!", "Wonderful!", "You                          sure know your shapes and colors!", "Great job!", "Super!"];
    var wrongAnswerMsg = ["Keep trying, you'll get it", "So close, try again!", "Think                            hard, you'll get it!"];

    firstGradeRadio.onchange = function() {
        if(firstGradeRadio.checked) {

            images = ["red", "orange", "yellow", "green", "blue", "black", "brown"];

            getNextProblem();

        }
    };

    secondGradeRadio.onchange = function() {
        if(secondGradeRadio.checked) {
            images = ["square", "triangle", "rectangle", "hexagon", "circle", "pentagon"];

            getNextProblem();
        }
    };

    answerBtn.onclick = function(e){ 

        // Get the user's guess and store it in userGuess.
        userGuess = document.getElementById("userAnswer").value.toLowerCase();
        // Calculate the answer.
        answer = image;

        // IF userGuess equals answer
            //  Display correct answer message.
            //  Play correct answer sound.
            //  Get the next problem.
        // ELSE
            // Display wrong answer message.
        if(checkAnswer(userGuess, answer)) {
            output.innerHTML = correctAnswerMsg[getRandomInt(0, correctAnswerMsg.length -1)];
            correctSound.play();
            getNextProblem();
        } else {
            output.innerHTML = wrongAnswerMsg[getRandomInt(0, wrongAnswerMsg.length -1)];
        }
        // Reset the input area to empty string.
        inputArea.value = "";

    };  

}
main();