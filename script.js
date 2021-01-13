// Selects element by class
var timeEl = document.querySelector(".time");
var start = document.querySelector(".startButton")

// creat order list
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");





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