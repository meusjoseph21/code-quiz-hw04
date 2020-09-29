
//GIVEN I am taking a code quiz

//WHEN I click the start button
//THEN a timer starts and I am presented with a question



//These variables for timer
var timeStart = document.getElementById("timer");
var timeLeft = document.querySelector(".time-left");
var clearMain = document.querySelector(".clear");
var showQuestions= document.querySelector(".question-container");
var countdown = 75;

//Timer of 75 seconds 

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

      startQuestions();

          
 }



quizBegin()


var questions = [
    {title: "what is up?", choices: ['one','two','three','four'], answer: 'one'},
    {title: "what is down?", choices: ['one','two','three','four'], answer: 'two'},
    {title: "what is left", choices: ['one','two','three','four'], answer: 'three'},
    {title: "what is right?", choices: ['one','two','three','four'], answer: 'four'},

]


function startQuestions(){
    showQuestions.style.display = 
    "block";
    //fill in div with list items
    var list = document.createElement('ul');
    var pull = set1.question;

    var item = document.createElement('li');
    item.appendChild.pull;

    
}

//TODO question pops up need to fill the list items from array.




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