var timerElement = document.querySelector(".timer-counter");
var quizHeader = $('#header');
var startButton = $("#start-button");
var initialsInput = $("#inputInit");
var submitInitialsBtn = $("#submitInitials");
let quizPrompt = document.getElementById("quizPrompt");
let ansBtn = document.createElement("button");
let btnContainer = document.getElementById("answerButton");
var finalPromptContainer = document.getElementById("Final-Prompt-Container");

var userScore = 0;
var timer = null;
var timerCounter;
var questionNumber = 0;
var scoreBoard = document.getElementById("score-board");
var scoreBoardContainer = document.getElementById("score-board-container");
var resetBtn = document.getElementById("resetBtn");

initialsInput.hide();
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
        prompt: "A very useful tool used during development and debugging for printing content to the debugger is?",
        choices: ["console.log", "Terminal/Bash", "For loops", "JavaScript"],
        correct: "console.log",
      },
];

// lay out basic structure
function showQuestion (q){

    var finalQuestion = question.length;

    if (questionNumber === finalQuestion){
        endGame();
        displayScoreBoard();
        clearInterval(timer);
        return;
    } else if (timer <= 0 ){
        clearInterval(timer);
        displayScoreBoard();
    } else {
        
        btnContainer.innerHTML = "";
        quizPrompt.textContent = q[questionNumber].prompt;
        
        q[questionNumber].choices.forEach( choices => {
            let ansBtn = document.createElement("button");
            ansBtn.textContent = choices;
            btnContainer.classList.remove("hide");
            btnContainer.appendChild(ansBtn);
            ansBtn.addEventListener("click", function (){
                if (ansBtn.textContent == q[questionNumber].correct){
                    userScore = userScore + 10;
                    console.log(userScore);
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
    userScore = 0;
    // get timer
    timerEl();
    // hide start button
    startButton.hide();
    quizHeader.hide();
    questionNumber = 0;
    btnContainer.classList.remove("hide");
    quizPrompt.classList.remove("hide");
    finalPromptContainer.classList.add("hide")
    scoreBoardContainer.classList.add("hide");
    showQuestion(question);

}

function endGame(){
    clearInterval(timer);
    finalPromptContainer.classList.remove("hide");
    var finalPrompt = document.createElement("h2");
    finalPrompt.classList.add("final-prompt")
    finalPrompt.textContent = "End of the Quiz! Your final score is " + userScore;
    document.body.appendChild(finalPrompt);
    
    ansBtn.classList.add("hide");
    btnContainer.classList.add("hide");
    quizPrompt.classList.add("hide");
    submitInitialsBtn.show();
    initiInput.show();
}

function displayScoreBoard(){
    scoreBoardContainer.classList.remove("hide");
    scoreBoard.classList.remove("hide");
    scoreBoardContainer.classList.remove("scoreBoardContainer");
    resetBtn.classList.add("hide");
    scoreBoard.innerHTML = "";
    btnContainer.innerHTML = ""
    
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

var viewHighScoresBtn = document.getElementById("view-high-scores");
viewHighScoresBtn.addEventListener('click', scoreBoard);
submitInitialsBtn.on("click", function(event){
    
    event.preventDefault();
    var userHighScore = JSON.parse(localStorage.getItem("user-high-scores")) || [];
    var UserInfo = {
        initials: initialsInput.val(), userScore:userScore}
        
    userHighScore.push(UserInfo);
    localStorage.setItem("user-high-scores", JSON.stringify(userHighScore))
    displayScoreBoard();
    submitInitialsBtn.hide();
    initialsInput.hide();

    $(".final-prompt").hide();
    quizPrompt.classList.add("hide");

    
    resetBtn.classList.remove("hide");
    resetBtn.addEventListener("click", startGame);
    
})

function timerEl(){
    //set timer 
    timer = setInterval(function(){
        timerCounter --;
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