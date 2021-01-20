// Selects element by class
var timeEl = document.querySelector("#time");
var start = document.querySelector("#startButton");
var questionDiv=document.querySelector("#displayQuestion")
var score = document.querySelector("#score")
var quizQuestion = document.querySelector("#quiz-question");
var optionList = document.querySelector("#option-list");
var answerDiv = document.querySelector("#answer-div");
var questionindex =0;
var score =0;
// Each question will have 20 seconds
var timeLeft = 60;
// Penalty time 10 seconds
var penalty = 10;

var holdtime = 5;

// create answer div
  // var answer_div = document.createElement("div");
  // answer_div.setAttribute("id", "answerDiv");
  // questionDiv.appendChild(answer_div);


start.addEventListener("click", function(){
  console.log ("clicked");
  // start quiz timer
   quizTimer();

  // Show first question (displayquiz function)
   displayquiz();
  
  // reset score
  // setScore();
  // hide startbutton
  start.style.display="none";
})

function resetQuiz()
{
  questionindex = 0;
  score = 0;
    
}

var questionMaster=[
  {
    question:  "Question 1?",
    answer : "answer1",
    option: ["answer1", "answer2", "answer3", "answer4"]


  },
  {
    question:  "question2?",
    answer : "answer1",
    option: ["answer1", "answer2", "answer3", "answer4"]


  },
  {
    question:  "question3?",
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
    optionList.innerHTML="";
    quizQuestion.innerHTML="";
    
      var q = questionMaster[questionindex];

      console.log(q.question);
      console.log( q.option.length);
      
      quizQuestion.textContent=q.question;
    

      for (var i = 0; i < q.option.length; i++) {
        var choice = q.option[i];
        var listitem = document.createElement("li");
        // listitem.textContent = choice;
        listitem.setAttribute("data-index", i);
        var optButton = document.createElement("button");

        optButton.textContent = choice;
        listitem.appendChild(optButton);
        optionList.appendChild(listitem);
        
        
      }

      
  }
  
  
  optionList.addEventListener("click", function (event) {
    var q = questionMaster[questionindex];
    var answer = q.answer;
    var hideDiv;
    console.log("answer ",answer);
    // create answer div
    var x = document.getElementById('answer-div');
    x.style.display="block";
    var element = event.target;
    if (element.matches("button") === true) {
        

          if(answer === element.textContent ){
          
            answerDiv.textContent="Correct!";
           
          } else{
            // will deduct 10 seconds off for wrong answer
            console.log(timeLeft);
            timeLeft = timeLeft - penalty;
            console.log(timeLeft);
            playsound();
            answerDiv.textContent="Sorry, that's incorrect."
           
          }

          setTimeout (function(){
            
            x.style.display="none";
          },1000)

          questionindex ++;
          console.log("index ", questionindex);
          console.log("question length ", questionMaster.length);

          // check question index
          if(questionindex >= questionMaster.length){
            // Reset timer
            // render result page
            console.log("done");

          }else{
            // answerDiv.textContent="";

            displayquiz()
          }
    }
 
});
  
function playsound() { 
  var audio = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3'); 
  audio.play(); 
} 


function hideAnswer(){
  var divEl= document.getElementById("#answerDiv");
  divEl.style.display='none';
  }

function compareselection(event){
  var element = event.target;
  if (element.matches(li)){
      console.log(element.textContent);
  }
  
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
      
      timeEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
  
      if (timeLeft === 0) {
        timeEl.textContent = "Time's up!";
        
        clearInterval(timeInterval);
      }
  
    }, 1000);
  }