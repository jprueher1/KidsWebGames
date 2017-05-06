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
    displayWord = word.replace(missingLetter, "_");
    // Display the word to the user.
    problem1.innerHTML = displayWord;
    
}

// Initialize variables.
var currentScore = 0;
var question1 = 0;
var guess = 0;
var wordDisplay = document.getElementById("problem1");
var firstGradeRadio = document.querySelector("#firstGrade");
var secondGradeRadio = document.querySelector("#secondGrade");
var thirdGradeRadio = document.querySelector("#thirdGrade");
var answer = "";
var answerBtn = document.getElementById("answerBtn");
var userGuess = "";
var inputArea = document.getElementById("userAnswer");
var output = document.getElementById("feedbackOutput");
var word = "";
var words = [];
var secondGradeWords = [];
var thirdGradeWords = [];

var correctAnswerMsg = ["Awesome!", "You're really good at this!", "Wonderful!", "You                          sure know your spelling words!"];
var wrongAnswerMsg = ["Keep trying, you'll get it", "So close, try again!", "Think                            hard, you'll get it!"];

firstGradeRadio.onchange = function() {
    if(firstGradeRadio.checked) {
        
        words = ["Eat", "Dog", "Cat", "Car", "Pig", "Log", "Mom", "Dad"];
        
        getNextProblem();
        
    }
}

secondGradeRadio.onchange = function() {
    if(secondGradeRadio.checked) {
        words = ["Plant", "Apple", "Deer", "King" ]
        
        getNextProblem();
    }
}

thirdGradeRadio.onchange = function() {
    if(thirdGradeRadio.checked) {
        words = ["Amazing", "Absolutely", "Teriffic", "Cookbook", "Animal"];
        
        getNextProblem();
        
    }
}
    
answerBtn.onclick = function(e){ 
    
    // Get the user's guess and store it in userGuess.
    userGuess = document.getElementById("userAnswer").value.toLowerCase();
    // Calculate the answer.
    answer = missingLetter;
    
    // IF userGuess equals answer
        //  Display correct answer message.
        //  Add to current score.
        //  Get the next problem.
    // ELSE
        // Display wrong answer message.
    if(checkAnswer(userGuess, answer)) {
        output.innerHTML = correctAnswerMsg[getRandomInt(0, correctAnswerMsg.length -1)]
        currentScore+= 10;
        getNextProblem();
    } else {
        output.innerHTML = wrongAnswerMsg[0, wrongAnswerMsg.length -1];
    }
    // Reset the input area to empty string.
    inputArea.value = "";
    
}  