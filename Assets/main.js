var visibleQuestion = document.querySelector(".question");
var timerElement = document.querySelector(".timer-counter");
var startButton = document.querySelector(".start-button");
var quizPrompt = $('.quiz-prompt');

var UserScore = 0;
var timer = null;
var timerCounter;

var questionsBank = [
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


function startQuiz(event){
    event.preventDefault();
    timerCounter = 90;
    timerEl();
    // Stops the start button from being called when game is in session
    startButton.disabled = true;

    var output = [];
    var UserAnswer; // This will hold what the user selects
    var questionsComplete = 0; // counts how many questions users has completed
}
function getQuestions(index){
    var displayQuiz = $('<div>', {id: 'question'});
        
    var questionPrompt = $('<h2>Question ' + (index + 1) + ':</h2>');
    displayQuiz.append(questionPrompt);

    //var question = $('<p>').append(questionsBank[index].question);
    //displayQuiz.append(question);
    
    var radioButtons = createAnswers(index);
    displayQuiz.append(radioButtons);
    
    return displayQuiz;
    }

function createAnswers (index){
    for (var i = 0; i < questionsBank[index].a.length; i++) {
        var item = $('input[<li type=button name=answer value=" + i "+ />]').val(); // update with right classes
        quizPrompt.append('<li>' +item +'</li>');
        input += questions[index].choices[i];

        item.append(input);
        radioList.append(item);
        }
    return radioList;
}

getQuestions();
showAnswer();



            // for(letter in question[i].answers){
            //     // add radio button
            //     answersBank.$('<flex-row justify-space-between align-center p-2 bg-light text-dark');
            //     answersBank.$('<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">')
            //     answersBank.text(answers);
            //     quizPrompt.append(questionBank);
            // }

function UserScore(){
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var j = 0; j < selections.length; j++) {
        if (selections[j] === questions[j].correctAnswer) {
        numCorrect++;
      }
    }
    score.append('Score: ' + numCorrect);
    return score;
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