// var visibleQuestion = document.querySelector(".quiz");
var timerElement = document.querySelector(".timer-counter");
var quizHeader = $('#header');
// var visibleResults = document.querySelector(".results");
var startButton = $("#start-button");
var resetButton = document.querySelector("#reset-button");

var UserScore = 0;
var timer = null;
var timerCounter;
var questionNumber = 0;

var question = [{
        prompt: "Commonly used data types do not include?",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        correct: 2,
    },
    {
        prompt: "The condition in an if/else statement is enclosed with ______ ?",
        choices: ["Quotes","Curly Brackets","Parenthesis","Square Brackets"],
        correct: 2,
    },
    {
        prompt: "Arrays in JavaScript can be used to store?",
        choices: ["Numbers & Strings", "Other arrays", "Booleans", "All of the above"],
        correct: 3,
    },
    {
        prompt: "Arrays in JavaScript can be used to store?",
        choices: ["Numbers & Strings", "Other arrays", "Booleans","All of the above"],
        correct: 3,
    },
    {
        prompt: "A very useful tool used during development and debugging for printing content to the debugger is?",
        choices: ["console.log", "Terminal/Bash", "For loops", "JavaScript"],
        correct: 0,
      },
];

// lay out basic structure
function showQuestion (q){
    // selects dom element
    let quizPrompt = document.getElementById('quizPrompt');
    // modifies dom element
    
    // selecting by query
    var possibleAnswer = document.querySelectorAll('.possibleAnswer');
    var answerKey = document.getElementById("answerKey");

    const questionLength = q[questionNumber].length;

    nextQuestion(q);
   function nextQuestion (q){ 
    quizPrompt.textContent = q[questionNumber].prompt;
      possibleAnswer.forEach(function(element, index){
        element.textContent = q[questionNumber].choices[index];
        element.addEventListener('click', function(){
            // check correct answer
            if (timer === 0 || questionNumber === questionLength){
                endGame();
            } else if (q[questionNumber].correct == index){
                UserScore = UserScore +10;
                console.log(UserScore);
                answerKey.textContent = "Correct!";
                questionNumber ++;
                nextQuestion(q);
            } else {
                answerKey.textContent = "Wrong!";
                console.log('Wrong answer');
                questionNumber ++;
                nextQuestion(q); }
        });
     });
    
   }

    const resetButton = document.createElement('button');
    resetButton.textContent= 'Reset Game';
    document.body.appendChild(resetButton);

}

 
function startGame(event){
    event.preventDefault();
    timerCounter = 90;
    // get timer
    timerEl();
    // hide start button
    startButton.hide();
    quizHeader.hide();
    showQuestion(question);

}
    
 // if the current question = 0 then pull first question
 // if the 
 // if the current question is the last stop
    // show questions
    // save score
    // end game 
    
    // update html elements with text
    // create unordered list
    // create list items
    // create user input

    // find current question
    // display current answer
    // log if correct 
    // loop to next question

        



function endGame(){
    var finalScore = UserScore;


}

function resetGame(q){
    startButton.show();
    timerCounter = 90;
    UserScore = 0;
    showQuestion(q);




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

// call start game function
startButton.on("click", startGame);
