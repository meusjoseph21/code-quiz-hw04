
//GIVEN I am taking a code quiz

//WHEN I click the start button
//THEN a timer starts and I am presented with a question



//These variables for timer
var timeStart = document.getElementById("timer");
var timeLeft = document.querySelector(".time-left");
var clearMain = document.querySelector(".clear");

var showQuestions= document.querySelector(".question-container");
var choices= document.getElementById("choices");
var title= document.getElementById("question-title");
var countdown = 75;
var indexQuestion = 0;

var questions = [
    {title: "what is up?", choices: ['one','two','three','four'], answer: 'one'},
    {title: "what is down?", choices: ['one','two','three','four'], answer: 'two'},
    {title: "what is left", choices: ['one','two','three','four'], answer: 'three'},
    {title: "what is right?", choices: ['one','two','three','four'], answer: 'four'},

]


//todo add event listener to listen to all four questions us

function showCurrentQuestion(){
    var currentQuestion = questions[indexQuestion];
    title.textContent = currentQuestion.title;
      
}

function startQuiz(e){
    var currentQuestion = questions[indexQuestion]
    clearMain.style.display = "none"; //clears the start screen

    console.log("click"); //this works now add timer start
    var timerCountdown = setInterval(function(){
        countdown--;
        timeLeft.textContent =  countdown + " seconds left";
        if (countdown === 0){
            clearInterval(timerCountdown);
        }
    }, 1000)

    for (let i = 0; i < currentQuestion.choices.length; i++) {
        var button = document.createElement("button")
        button.setAttribute("value","answers")
        button.textContent = currentQuestion.choices[i]
        choices.appendChild(button) 
     }


     
    showCurrentQuestion();

    
  }
  // I need to figure out how when the user clicks an answer its either correct or incorrect. How do I do that?

  function questionAnswered(e){
    var correctAnswer = questions[indexQuestion].answer
    console.log(correctAnswer)
    var userAnswr = e.target.value
    console.log(userAnswr)
    

    if (userAnswr === "answers"){
        
        indexQuestion++
        showCurrentQuestion();
    }    

  }

   

//Event listener
timeStart.addEventListener("click", startQuiz);

choices.addEventListener("click", questionAnswered);

//Entry Point



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