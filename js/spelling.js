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

    // Gets the next addition problem.
    function getNextProblem(){
        // Assign random word to word variable from Array of words for selected grade level.
        word = words[getRandomInt(0, words.length - 1)].toLowerCase();

        // Get a random missing letter not at the beginning or end.
        missingLetter = word[getRandomInt(1, word.length - 2)];
        // Replace missing letter with an underscore
        var displayWord = word.replace(missingLetter, "_");
        // Display the word to the user.
        wordDisplay.innerHTML = displayWord;

    }

    // Initialize variables.

    var wordDisplay = document.getElementById("problem1");
    var firstGradeRadio = document.querySelector("#firstGrade");
    var secondGradeRadio = document.querySelector("#secondGrade");
    var thirdGradeRadio = document.querySelector("#thirdGrade");
    var answer = "";
    var answerBtn = document.getElementById("answerBtn");
    var userGuess = "";
    var inputArea = document.getElementById("userAnswer");
    var missingLetter = "";
    var output = document.getElementById("feedbackOutput");
    var word = "";
    var words = [];

    var correctSound = new Audio("sounds/correct.wav");

    var correctAnswerMsg = ["Awesome!", "You're really good at this!", "Wonderful!", "You                          sure know your spelling words!"];
    var wrongAnswerMsg = ["Keep trying, you'll get it", "So close, try again!", "Think                            hard, you'll get it!"];

    firstGradeRadio.onchange = function() {
        if(firstGradeRadio.checked) {

            words = ["Eat", "Dog", "Cat", "Car", "Pig", "Log", "Mom", "Dad", "Ant", "Bag", "Fan", "Jam"];

            getNextProblem();

        }
    };

    secondGradeRadio.onchange = function() {
        if(secondGradeRadio.checked) {
            words = ["Plant", "Apple", "Deer", "King", "Most", "Where", "Just", "Phone", "Each", "Every", "Some", "Crazy", "Bear", "Planet", "Earth", "Mars", "Candy" ];

            getNextProblem();
        }
    };

    thirdGradeRadio.onchange = function() {
        if(thirdGradeRadio.checked) {
            words = ["Amazing", "Absolutely", "Teriffic", "Cookbook", "Animal", "Antelope", "Buffalo", "Jupiter", "Saturn", "Aligator", "Crocodile", "Television", "Driveway", "Dinosaur", "Reptile", "Amphibian", "Herbivore", "Carnivore"];

            getNextProblem();

        }
    };

    answerBtn.onclick = function(e){ 

        // Get the user's guess and store it in userGuess.
        userGuess = document.getElementById("userAnswer").value.toLowerCase();
        // Calculate the answer.
        answer = missingLetter;

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
