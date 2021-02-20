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
var highScorediv = document.getElementById("high-score");
var renderScoreInputName = document.getElementById("render-score");
var clearLocalStorage=document.getElementById("clear-score")
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
var count =0;
var clear;
// hide Div
submitScoreDiv.style.display = "none";
highScorediv.style.display="none";

function countVal(){
  count ++;
  
  timeEl.textContent = timeLeft + " seconds remaining";
  timeLeft--;
  if (timeLeft <= 0) {
    timeEl.textContent = "Time's up!";
    clearInterval(clear);
    showScore();
  }
}
// create answer div
  // var answer_div = document.createElement("div");
  // answer_div.setAttribute("id", "answerDiv");
  // questionDiv.appendChild(answer_div);


start.addEventListener("click", function(){
  console.log ("clicked");
  submitScoreDiv.style.display = "none";
  questionDiv.style.display = "block"
  // check questionindex
  if (questionindex === finalQuestionIndex){
    return showScore();
  } 
  // start quiz timer
  //  quizTimer();
  clear = setInterval((countVal) , 1000);
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
  renderScoreInputName.innerHTML="";
  scoreInputName.value="";
  timeLeft=60;
  clearInterval(clear);
  start.style.display="block";
  submitScoreDiv.style.display = "none";
  highScorediv.style.display="none";
  timeEl.textContent="";
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
            score= score + 10
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
            
            // timeEl.style.display="none";
            // scoreSectionEl.style.display="block";
            
            timeEl.textContent="Game Over";
            clearInterval(clear);
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
    clearInterval(clear);
    console.log (score);
}


submitScore.addEventListener("click", function(){
    
    
      if(scoreInputName.value === "") {
          alert("Initials cannot be blank");
          return false;
      } else {
      
          var currentUser = scoreInputName.value.trim();
          console.log(score);
          var currentUser = {
              name : currentUser,
              score : score
          };
          var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
          // push object into score array
          highScores.push(currentUser)
          submitScoreDiv.style.display = "none";
          // save to local storage
          localStorage.setItem("highScores", JSON.stringify(highScores));
          // display high score
          highScorediv.style.display="block";
          HighScore()

      }
})
var highscoreArray=[];
function HighScore(){
var high =0;
if(localStorage.highScores){
  highscoreArray=JSON.parse(localStorage.highScores);
  console.log("local length", highscoreArray.length);
  for(var i=0; i < highscoreArray.length; i++ ){
      var lsscore=highscoreArray[i].score;
      if (lsscore >= high){
        high=lsscore;
        var lsname=highscoreArray[i].name;
      }
     
    }
    renderScoreInputName.innerHTML= lsname + "-" + high ;
    console.log(high);
  }

}



startOver.addEventListener("click", function(){
  resetQuiz();
} )
// clear local storage
clearLocalStorage.addEventListener("click", function(){
  highScoresArray=[];
  localStorage.setItem('highScores', JSON.stringify(highScoresArray));
})

    

  




