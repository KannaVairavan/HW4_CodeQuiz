// Selects element by class
var timeEl = document.querySelector("#time");
var start = document.querySelector("#startButton");
var questionDisplay=document.querySelector("#displayQuestion")
var score = document.querySelector("#score")
var questionindex =0;
var score =0;
start.addEventListener("click", function(){
  console.log ("clicked");
  // Show first question (displayquiz function)
  // start quiz timer
  // reset score

})



var questionMaster=[
  {
    question:  "inside which HTML5?",
    answer : "answer1",
    option: ["answer1", "answer2", "answer3", "answer4"]


  },
  {
    question:  "inside which HTML1?",
    answer : "answer1",
    option: ["answer1", "answer2", "answer3", "answer4"]


  },
  {
    question:  "inside which HTML2?",
    answer : "answer1",
    option: ["answer1", "answer2", "answer3", "answer4"]


  },
  {
    question:  "inside which HTML3?",
    answer : "answer1",
    option: ["answer1", "answer2", "answer3", "answer4"]


  },
  {
    question:  "inside which HTML4?",
    answer : "answer1",
    option: ["answer1", "answer2", "answer3", "answer4"]


  }
]
// function displayquiz
function displayquiz(){
var q = questionMaster[questionindex];

}

// quizscore function
function setScore(){
  //  Updates score to client storage
  localStorage.setItem("score", score);

}

function renderScore(){
  
    // Get stored value from client storage, if it exists
    var quizScore = localStorage.getItem("score");
    // If stored value doesn't exist, set counter to 0
    if (quizScore === null) {
      score = 0;
    } else {
      // If a value is retrieved from client storage set the score to that value
      score = quizScore;
    }
    //Render score  to page
    score.textContent = score;
 }
// pass boolean variable result 
// Each question will have 20 seconds
var timeLeft = 100;
// Penalty time 10
var penalty = 10;
// result
function quizTimer() {
  
    var timeInterval = setInterval(function() {
      // for each wrong answer take away 10 seconds
      if (result === false) {timeLeft = timeLeft-10}
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
  
      if (timeLeft === 0) {
        timerEl.textContent = "Time's up!";
        
        clearInterval(timeInterval);
      }
  
    }, 1000);
  }