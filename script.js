// Selects element by class
var timeEl = document.querySelector("#time");
var start = document.querySelector("#startButton");

start.addEventListener("click", function(){
  console.log ("clicked");
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



// pass boolean variable result 

function quizTimer(result) {
    var timeLeft = 10;
  
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