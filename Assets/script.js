// Declaring variables 
var timerElement = document.querySelector(".timer-counter");
var quizHeader = $('#header');
var startButton = $("#start-button");
var initialsInput = $("#inputInit");
var submitInitialsBtn = $("#submitInitials");
let quizPrompt = document.getElementById("quizPrompt");
var quizPromptContainer = document.getElementById("quiz-prompt-container");
let ansBtn = document.createElement("button");
let btnContainer = document.getElementById("answerButton");
var finalPromptContainer = document.getElementById("Final-Prompt-Container");
var finalPromptText = document.getElementById("finalPromptText");
var userScore = 0;
var timer = null;
var timerCounter = 90;
var questionNumber = 0;
var scoreBoard = document.getElementById("score-board");
var scoreBoardContainer = document.getElementById("score-board-container");
var resetBtn = document.getElementById("resetBtn");

// question variables 
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
        prompt: "A very useful tool used during development and debugging for printing content to the debugger is?",
        choices: ["console.log", "Terminal/Bash", "For loops", "JavaScript"],
        correct: "console.log",
      },
];

//hides initial input, submit initials input button, final prompt container
//and quiz prompt container on startup
initialsInput.hide();
submitInitialsBtn.hide();
finalPromptContainer.classList.add("hide");
quizPromptContainer.classList.add("hide");

// show question function
function showQuestion (q){

    var finalQuestion = question.length;

    // if last question is called the game & timer stops.  Scoreboard is displayed
    if (questionNumber === finalQuestion){
        endGame();
        displayScoreBoard();
        clearInterval(timer);
        return;
    } else if (timer <= 0 ){
        // if timer runs out the scoreboard is displayed and time stops 
        clearInterval(timer);
        displayScoreBoard();
    } else {
        
        btnContainer.innerHTML = "";
        quizPrompt.textContent = q[questionNumber].prompt;
        
        // displays questions and all possible answers for users to choose from
        q[questionNumber].choices.forEach( choices => {
            let ansBtn = document.createElement("button");
            ansBtn.textContent = choices;
            btnContainer.classList.remove("hide");
            btnContainer.appendChild(ansBtn);
            ansBtn.addEventListener("click", function (){
                if (ansBtn.textContent == q[questionNumber].correct){
                    // if user is correct user points increased by 10
                    userScore = userScore + 10;
                    console.log(userScore);
                    quizPromptContainer.appendChild(btnContainer);
                }
                // loops to the next question
                questionNumber ++;
                showQuestion(q);
            })
        });
    }
   }


 // init the game from first time played and repeat times
function startGame(event){
    event.preventDefault();
    // sets timer counter to 90 sections
    timerCounter = 90;
    // resets the user score to 0 if they replay the game
    userScore = 0;
    // get timer
    timerEl();
    // hide start button, quiz header
    startButton.hide();
    quizHeader.hide();
    // resets the question number back to 0 in the index if user plays game more than once
    questionNumber = 0;
    // button container, quiz prompt, quiz container are now visible
    btnContainer.classList.remove("hide");
    quizPrompt.classList.remove("hide");
    quizPromptContainer.classList.remove("hide");
    // final prompt and scoreboard container are now hidden
    finalPromptContainer.classList.add("hide");
    scoreBoardContainer.classList.add("hide");
    // show question button is called and pulls in the question variable = q
    showQuestion(question);

}

// end game function
function endGame(){
    // stops timer
    clearInterval(timer);
    // final button container now visible
    finalPromptContainer.classList.remove("hide");
    // inputs user score to viewport after prompt
    var finalPromptScore = document.querySelector("#userScore");
    finalPromptScore.textContent = userScore;
    
    // hides the answer button, button container, &  quiz prompt
    ansBtn.classList.add("hide");
    btnContainer.classList.add("hide");
    quizPrompt.classList.add("hide");
    quizPromptContainer.classList.add("hide");
    // submit initials button and input now visible
    submitInitialsBtn.show();
    initialsInput.show();
}
// displays the scoreboard
function displayScoreBoard(){
    // scoreboard prompt, score board list now visible 
    scoreBoardContainer.classList.remove("hide");
    scoreBoard.classList.remove("hide");
    //scoreBoardContainer.classList.remove("scoreBoardContainer");
    // reset button now hidden
    resetBtn.classList.add("hide");
    scoreBoard.innerHTML = "";
    btnContainer.innerHTML = ""
    
    // this gets the scoreboard thats stored in local storage and renders it to the viewport
    var userHighScore = JSON.parse(localStorage.getItem("user-high-scores"));
    
    if  (userHighScore !== null){
        userHighScore.forEach(player =>{
            initialsInput.show();
            submitInitialsBtn.show();
            var playerName = document.createElement("h4");
            playerName.textContent = player.initials + ' - ' + player.userScore;
            scoreBoard.appendChild(playerName);
        })
    } 
    else { return; 
    }

}

// if the view high score board button is pushed the game stops or start button is hidden
// all scores listed in local storage are rendered
var viewHighScoresBtn = document.getElementById("view-high-scores");
viewHighScoresBtn.addEventListener('click', displayScoreBoard);
submitInitialsBtn.on("click", function(event){
       
    event.preventDefault();
    var userHighScore = JSON.parse(localStorage.getItem("user-high-scores")) || [];
    var UserInfo = {
        initials: initialsInput.val(), userScore:userScore}
        
    userHighScore.push(UserInfo);
    localStorage.setItem("user-high-scores", JSON.stringify(userHighScore));
    displayScoreBoard();
    // hides final prompt text, submit initials button, initials button 
    // quiz prompt and quiz prompt container if currently visible
    finalPromptText.classList.add("hide");
    submitInitialsBtn.hide();
    initialsInput.hide();
    quizPrompt.classList.add("hide");
    quizPromptContainer.classList.add("hide");

    // the reset button is now visitable and adds and event listener to the start game
    // when reset button is pushed
    resetBtn.classList.remove("hide");
    resetBtn.addEventListener("click", startGame);
    
})

// timer function for the game
function timerEl(){
    //set timer 
    timer = setInterval(function(){
        // timer decreased by 1 second
        timerCounter --;
        // renders time left and how much time on nav bar 
        timerElement.textContent = "Time Left: " + timerCounter + " seconds";
        if (timerCounter === 0){
            //if time runs out end the game
            clearInterval(timer);
            endGame();
        
        }
    }, 1000);
}

// call start game function
startButton.on("click", startGame);