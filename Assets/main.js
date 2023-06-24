var visibleQuestion = document.querySelector(".question");
var timerElement = document.querySelector(".timer-counter");
var startButton = document.querySelector(".start-button");
var quizPrompt = $('.quiz-prompt');

var UserScore = 0;
var timer = null;
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


function startQuiz(quizContainer, questionNumber){
    timerCounter = 90;
    timerEl();
    // Stops the start button from being called when game is in session
    startButton.disabled = true;

    // var output = [];
    // var answersBank;
    function getQuestions(questions){
        for (var i = 0; i < questions; i++) {
        
            answersBank = [];
            
            var displayQuiz = $('<div>');
            for(letter in question[i].answers){
                // add radio button
                answersBank$('<flex-row justify-space-between align-center p-2 bg-light text-dark');
                answersBank$('<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">')
                answersBank.text(answers);
                quizPrompt.append(questionBank);
            }

        }
    }

    $('.quizPrompt').text("Question " + questionNumber);
    $('.question').text(quizContainer.question);


    function showAnswer(){

    }

    getQuestions();
    showAnswer();
    }


function endGame(){
    //show last page and user score
    clearInterval(timer);
    secondsLeft = 90;
    startButton.disabled = false;

}

function highScore (){
    UserScore.textContent.scoreCount;
    localStorage.setItem("High Score", scoreCount, "User Initials", userInitials);
    
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
startButton.addEventListener("click", startQuiz);
// call start game function

// reset button
var resetButton = document.querySelector(".reset-button");

//function resetQuiz(){
 //var storedWins = localStorage.getItem("score");}