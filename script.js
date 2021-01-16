// Selects element by class
var timeEl = document.querySelector("#time");
var start = document.querySelector("#startButton");
var questionDiv=document.querySelector("#displayQuestion")
var score = document.querySelector("#score")
var optionList = document.querySelector("#option-list");
var questionindex =0;
var score =0;
// Each question will have 20 seconds
var timeLeft = 100;
// Penalty time 10 seconds
var penalty = 10;




start.addEventListener("click", function(){
  console.log ("clicked");
  // start quiz timer
  // quizTimer();

  // Show first question (displayquiz function)
  displayquiz();
  
  // reset score
  // setScore();
  // hide startbutton
  
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
  // clear data
   questionDiv.innerHTML="";
  //  optionList.innerHTML="";

  
  var q = questionMaster[questionindex];

  var pEl= document.createElement("p");
  pEl.textContent = q.question;
  questionDiv.appendChild(pEl);
console.log(pEl);
    console.log(q.question)
  console.log( q.option.length)
  var ulEl = document.createElement("ul");
  questionDiv.appendChild(ulEl);
    for (var i = 0; i < q.option.length; i++) {
      var choice = q.option[i];
      var listitem = document.createElement("li");
      listitem.textContent = choice;
      listitem.setAttribute("data-index", i);
      ulEl.appendChild(listitem);
      
      console.log( choice);
    }
  
}
// 
function displayNext(){
  
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

// result
function quizTimer() {
  
    var timeInterval = setInterval(function() {
      // for each wrong answer take away 10 seconds
      // if (result === false) {timeLeft = timeLeft-10}
      timeEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
  
      if (timeLeft === 0) {
        timeEl.textContent = "Time's up!";
        
        clearInterval(timeInterval);
      }
  
    }, 1000);
  }