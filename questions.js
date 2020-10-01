
//GIVEN I am taking a code quiz

//all variables
var timeStart = document.getElementById("timer");
var timeLeft = document.querySelector(".time-left");
var clearMain = document.querySelector(".clear");

var showQuestions= document.querySelector("#question-container");
var choices= document.getElementById("choices");
var title= document.getElementById("question-title");
var countdown = 75;
var indexQuestion = 0;
var message = document.querySelector(".message")
var endQuiz = document.getElementById("end")
var timerCountdown
var enterName = document.getElementById("name")
var finalScore = document.getElementById("score")
var nameStorage = document.getElementById("namestorage")
var submitClick = document.querySelector("#listenclick")
var highscore = document.getElementById("highscore")


// questions array 
var questions = [
    {title: "The condition in an if / else statement is enclosed within square brackets.", choices: ['true', 'false'], answer: 'false'},
    {title: "console logging a variable makes it show up in the terminal", choices: ['true', 'false'], answer: 'false'},
    {title: "the # symbol means that the selector is an ID", choices: ['true','false'], answer: 'true'},
    {title: "the best way to save your work when done is on github", choices: ['true','false'], answer: 'true'},
    {}

]

//shuffles through questions
function showCurrentQuestion(){
    var currentQuestion = questions[indexQuestion];
    title.textContent = currentQuestion.title;
      
}

//starts timer
function timer(){
     timerCountdown = setInterval(function(){
        countdown--;
        timeLeft.textContent =  countdown + " seconds left";
        if (countdown === 0){
            clearInterval(timerCountdown);
        }
    }, 1000)
}

//clears the main screen on clicking start and brings up questions 
function startQuiz(){
    var currentQuestion = questions[indexQuestion]

    clearMain.style.display = "none"; //clears the start screen


    console.log("click"); //this works now add timer start
    
    timer()

    for (let i = 0; i < currentQuestion.choices.length; i++) {
        var button = document.createElement("button")
        button.setAttribute("data-answer",currentQuestion.choices[i])
        button.textContent = currentQuestion.choices[i];
        choices.appendChild(button) 
     }


     
    showCurrentQuestion();

    
  }


  //correct or incorrect and also takes points off for incorrect
  function questionAnswered(e){
    var correctAnswer = questions[indexQuestion].answer
    console.log(correctAnswer)
    var userAnswr = e.target.getAttribute("data-answer")
    console.log(userAnswr)
    

    if (userAnswr){
        
        indexQuestion++
        showCurrentQuestion();

        if (userAnswr === correctAnswer){
            message.textContent = "correct!"
        } else {
            message.textContent = "incorrect!"
            countdown-= 15
            
        }
    }  
    if (indexQuestion === 4) {
        

        console.log("end")
        endOfQuiz()

    }  

  }

  //ends the quiz, clears questions, brings up scores area

  function endOfQuiz(){
      

    clearInterval(timerCountdown)

    endQuiz.style.display = "block"

    timeLeft.style.display = "none"

    showQuestions.style.display = "none"

    finalScore.textContent = countdown

    highscoreRecorder();
  }

  function highscoreRecorder(){

    submitClick.addEventListener("click",function(e){
        e.preventDefault()
        var score = countdown
        var initials = nameStorage.value
        var highscoreData = [{
            score: score,
            initials: initials
        },]
        

        //localStorage.setItem("highscore", JSON.stringify(highscoreData))

        var storage = localStorage.getItem("highscore")
        if (storage === null){
            storage = []
        } else {
            storage = JSON.parse(storage)
        }
        storage.push(highscoreData)
        var newScore = JSON.stringify(storage)
         localStorage.setItem("highscore", newScore)
        

        if (storage !== null){

        for (var i = 0; i < storage.length; i++){
            var createLi = document.createElement("li")
            createLi.textContent = highscoreData[i].score + " " + highscoreData[i].initials
            highscore.appendChild(createLi)
            

        }
        
    }
         
    })

  }



   

//Event listener
timeStart.addEventListener("click", startQuiz);

choices.addEventListener("click", questionAnswered);


