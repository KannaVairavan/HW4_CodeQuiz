// Selects element by class
var timeEl = document.querySelector("#time");
var start = document.querySelector("#startButton");
var startOver = document.querySelector("#start-over");
var questionDiv=document.getElementById("displayQuestion");

var score = document.querySelector("#score");
var quizQuestion = document.querySelector("#quiz-question");
var optionList = document.querySelector("#option-list");
var answerDiv = document.querySelector("#answer-div");
var submitScore=document.getElementById("submit-button");
var submitScoreDiv = document.getElementById("submit-score");
var scoreInputName = document.getElementById("initial");

var questionMaster=[
  {
    question:  "Commonly Used data types DO NOT include:",
    answer : "alerts",
    option: ["stings", "alerts", "booleans", "numbers"]


  },
  {
    question:  "What is used primarily to add styling to a web page?",
    answer : "CSS",
    option: ["HTML", "CSS", "Python", "React.js"]


  },
  {
    question:  "How many elements can you apply an 'ID' attribute to?",
    answer : "1",
    option: ["As many as you want", "3", "1", "128"]


  },
  {
    question:  "What javascipt method can we use to select an html element?",
    answer : "Both 1 and 3",
    option: ["document.queryselector()", "document.getElementChild", "document.getElementById", "Both 1 and 3"]


  },
  {
    question:  "What HTML attribute references an external JavaScript file?",
    answer : "src",
    option: ["href", "src", "class", "index"]


  }
]

var questionindex =0;
var finalQuestionIndex = questionMaster.length;
var score =0;
// Each question will have 20 seconds
var timeLeft = 60;
// Penalty time 10 seconds
var penalty = 10;

var holdtime = 5;


startOver.style.display="none";
// create answer div
  // var answer_div = document.createElement("div");
  // answer_div.setAttribute("id", "answerDiv");
  // questionDiv.appendChild(answer_div);


start.addEventListener("click", function(){
  console.log ("clicked");
  submitScoreDiv.style.display = "none";
  // check questionindex
  if (questionindex === finalQuestionIndex){
    return showScore();
  } 
  // start quiz timer
   quizTimer();
   
  // Show first question (displayquiz function)
   displayquiz();
  
  // reset score
  // setScore();
  // hide startbutton
  start.style.display="none";
  startOver.style.display="block";
})

function resetQuiz()
{
  questionindex = 0;
  score = 0;
    
}


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
            score= score + 1
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
            

            // scoreSectionEl.style.display="block";
            showScore();
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

function showScore(){
  
    questionDiv.style.display = "none"
    submitScoreDiv.style.display = "block";
    clearInterval(timeInterval);
    
}


submitScore.addEventListener("click", function highscore(){
    
    
      if(scoreInputName.value === "") {
          alert("Initials cannot be blank");
          return false;
      } else {
      
          var currentUser = scoreInputName.value.trim();
          var currentscore = {
              name : currentUser,
              score : score
          };
          var savedScores = JSON.parse(localStorage.getItem("savedScores")) || [];
          submitScoreDiv.style.display = "none";
      
      
          savedScores.push(currentscore);
          localStorage.setItem("savedScores", JSON.stringify(savedScores));
      }
    })

  

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
  
        if (timeLeft <= 0) {
          timeEl.textContent = "Time's up!";
          clearInterval(timeInterval);
          showScore();
        }
  
    }, 1000);
  }