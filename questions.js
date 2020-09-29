
//GIVEN I am taking a code quiz

//WHEN I click the start button
//THEN a timer starts and I am presented with a question


var questions = [
    {
        "title" : "Did this work?",
        "answerArr" : ["yes","no","maybe"],
        "correct" : "yes"
    }

]

//These variables for timer
var timeStart = document.getElementById("timer");
var timeLeft = document.querySelector(".time-left");
var clearMain = document.querySelector(".clear");
var countdown = 75;

//Timer of 75 seconds 
//TODO make click on timer pull up first question
function quizBegin(){ 
    timeStart.addEventListener("click", function(){
        clearMain.style.display = "none"; //clears the start screen
        console.log("click"); //this works now add timer start
        var timerCountdown = setInterval(function(){
            countdown--;
            timeLeft.textContent =  countdown + " seconds left";
            if (countdown === 0){
                clearInterval(timerCountdown);
            }
        }, 1000)

        
      })
          
 }

quizBegin();

//TODO need to get a question to pop up or anything lol




// WHEN I answer a question correctly 
//search question is an object
// THEN I am presented with another question


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over


// WHEN the game is over
// THEN I can save my initials and score
// ```

//TODO there will be an array with objects, the objects are the questions with the answers

//TODO use data attributes to indicate whether or not its the correct answer 