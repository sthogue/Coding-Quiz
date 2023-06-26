var timerElement = document.querySelector(".timer-counter");
var quizHeader = $('#header');
var startButton = $("#start-button");
var initiInput = $("#inputInit");
var submitInitialsBtn = $("#submitInitials");
var resetButton = document.querySelector("#reset-button");
let quizPrompt = document.getElementById('quizPrompt');
let ansBtn = document.createElement("button");
let btnContainer = document.getElementById('answerButton');

var UserScore = 0;
var timer = null;
var timerCounter;
var questionNumber = 0;

initiInput.hide();
submitInitialsBtn.hide();
var question = [{
        prompt: "Commonly used data types do not include?",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        correct: "Alerts",
    },
    {
        prompt: "The condition in an if/else statement is enclosed with ______ ?",
        choices: ["Quotes","Curly Brackets","Parenthesis","Square Brackets"],
        correct: "Parenthesis",
    },
    {
        prompt: "Arrays in JavaScript can be used to store?",
        choices: ["Numbers & Strings", "Other arrays", "Booleans", "All of the above"],
        correct: "All of the above",
    },
    {
        prompt: "Arrays in JavaScript can be used to store?",
        choices: ["Numbers & Strings", "Other arrays", "Booleans","All of the above"],
        correct: "All of the above",
    },
    {
        prompt: "A very useful tool used during development and debugging for printing content to the debugger is?",
        choices: ["console.log", "Terminal/Bash", "For loops", "JavaScript"],
        correct: "console.log",
      },
];

// lay out basic structure
function showQuestion (q){
    
    var answerKey = document.getElementById("answerKey");
    var finalQuestion = question.length;

    if (questionNumber === finalQuestion-1){
        endGame();
        return;
    } else if (timer === 0 ){
        clearInterval(timerEl);
        endGame();
    } else {
        
        btnContainer.innerHTML = "";
        quizPrompt.textContent = q[questionNumber].prompt;
        
        q[questionNumber].choices.forEach( choices => {
            let ansBtn = document.createElement("button");
            ansBtn.textContent = choices;
            btnContainer.appendChild(ansBtn);
            ansBtn.addEventListener("click", function (){
                if (ansBtn.textContent == q[questionNumber].correct){
                    UserScore = UserScore + 10;
                    console.log(UserScore);
                    answerKey.textContent = "Correct!";
                    document.body.appendChild(btnContainer);
                }
                questionNumber ++;
                showQuestion(q);
            })
        });
    }
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
    clearInterval(timerEl);
    initiInput.show();
    var finalPrompt = document.createElement("h2");
    finalPrompt.textContent = "End of the Quiz! Your final score is " + UserScore;
    document.body.appendChild(finalPrompt);

    //quizPrompt.style.display = "block";
    //btnContainer.style.display = "block";

    submitInitialsBtn.show();
}

function endScore(){

}
function scoreBoard(){
    var userScore = JSON.parse(localStorage.getItem('userScore'));
    if  (userScore !== null){
        userScore.forEach(player =>{
            initiInput.show();
            submitInitialsBtn.show();
            let playerName = document.createElement("h4");
            playerName.textContent = person.initiInput + ' - ' + player.score;
            scoreCounter.appendChild(playerName);
        })
    } 
    else { return; 
    }

    submitInitialsBtn.addEventListener("click", function(event){
        event.preventDefault();

        var UserInfo = {
            init: initiInput.value, userScore:UserScore}
            
        
    })
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