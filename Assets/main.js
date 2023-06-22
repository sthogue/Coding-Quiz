var visibleQuestion = document.querySelector(".question");
var timerElement = document.querySelector(".timer-counter");
var startButton = document.querySelector(".start-button");

var UserScore = 0;
var timer;
var timerCounter;
var questionsComplete = false;

var questionBank= [
    { 
        question: "Are Java and Javascript the same computer language?",
        a: "Yes",
        b: "No",
        correct: "b"
    },
    {
        question: "Commonly used data types do not include?",
        a: "Strings",
        b: "Booleans",
        c: "Alerts",
        d: "Numbers",
        correct: "c",
    },
    {
        question: "The condition in an if/else statement is enclosed with ______ ?",
        a: "Quotes",
        b: "Curly Brackets",
        c: "Parenthesis",
        d: "Square Brackets",
        correct: "c",
    },
    {
        question: "Arrays in JavaScript can be used to store?",
        a: "Numbers & Strings",
        b: "Other arrays",
        c: "Booleans",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Arrays in JavaScript can be used to store?",
        a: "Numbers & Strings",
        b: "Other arrays",
        c: "Booleans",
        d: "All of the above",
        correct: "d",
    },
    {
        question:
          "A very useful tool used during development and debugging for printing content to the debugger is?",
        a: "console.log",
        b: "Terminal/Bash",
        c: "For loops",
        d: "JavaScript",
        correct: "a",
      },
];

// lay out basic structure


function startQuiz(){
    timer = 90;
    
    // Stops the start button from being called when game is in session
    startButton.disabled = true;

    function getQuestions(){


    }

    function showAnswer(){

    }

    getQuestions();
    showAnswer();
};

function endGame(){
    //show last page and user score
}


function timerEl(){
    //set timer 
    timer = setInterval(function(){
        timerCounter --;
        timerElement.textContent = "Time Left: " + timerCounter + " seconds";
        if (timerCounter === 0){
            //if time runs out end the game
            clearInterval(timer)
            endGame();
        }
    }, 1000);
}

// Add event listener for button

// call start game function

// reset button