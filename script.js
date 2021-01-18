// Selects element by class
var timeEl = document.querySelector("#time");
var start = document.querySelector("#startButton");
var questionDiv=document.querySelector("#displayQuestion")
var score = document.querySelector("#score")
var quizQuestion = document.querySelector("#quiz-question");
var optionList = document.querySelector("#option-list");
var questionindex =0;
var score =0;
// Each question will have 20 seconds
var timeLeft = 100;
// Penalty time 10 seconds
var penalty = 10;

var holdtime = 5;




start.addEventListener("click", function(){
  console.log ("clicked");
  // start quiz timer
   quizTimer();

  // Show first question (displayquiz function)
  displayquiz();
  
  // reset score
  // setScore();
  // hide startbutton
  
})



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
    console.log("answer ",answer);
    // create answer div
    

    var element = event.target;
    if (element.matches("button") === true) {
        

          if(answer === element.textContent ){
          
            answerDiv.textContent = "Correct!";
            setTimeout(hideAnswer,1000);
          } else{
            // will deduct 10 seconds off for wrong answer
            timeLeft = timeLeft - penalty
            playsound();
            // answerDiv.textContent = "Sorry, that's incorrect.";
            setTimeout(showAnswer("Sorry, that's incorrect."),500);

            
            hideAnswer();

          }
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
function showAnswer(answertext){
  var answerDiv = document.createElement("div");
  answerDiv.setAttribute("id", "answerDiv");
  questionDiv.appendChild(answerDiv);
  answerDiv.textContent = answertext;

}

function hideAnswer(){
  var divEl= document.getElementsByid("answerDiv")
  divEl.style.display='none'
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