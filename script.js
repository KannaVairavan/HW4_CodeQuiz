// Selects element by class
var timeEl = document.querySelector("#time");
var start = document.querySelector("#startButton");
var questionDisplay=document.querySelector("#displayQuestion")
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

// pass boolean variable result 
// Each question will have 20 seconds
var timeLeft = 100;
// Penalty time 10
var penalty = 10;

function quizTimer(result) {
    
  
    var timeInterval = setInterval(function() {
      // for each wrong answer take away 10 seconds
      if (result === false) {timerEl.textContent = timeLeft-10}
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
  
      if (timeLeft === 0) {
        timerEl.textContent = "";
        
        clearInterval(timeInterval);
      }
  
    }, 1000);
  }