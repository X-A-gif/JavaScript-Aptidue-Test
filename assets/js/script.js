//Delcare a questions varriable as an array of objects 
var questions = [
  {
    question: "Commonly used data types do not include?",
    options: ["Booleans", "Strings", "Numbers", "map"],
    correctAnswer: "map"
  },
];

var currentQuestion = 0;
let timer = 5;

let start = document.getElementById('startBtn');
let timerDisplay = document.getElementById("timer");
let quiz = document.getElementById("quizBox");

// Create a start function that calls our Quiz function and uses setInterval() 
// to initialize the timer decrementing by 1 second

function startFunc() {
    quizFunc();
    let countDown = setInterval(function() {
    timer--;
    timerDisplay.textContent = timer;
    if (timer <= 0) {
        clearInterval(countDown);
        alert("Time's up!");
        
    }
  }, 1000);
}

// Createed our quiz function 
// call our quiz variable and use the .innerHTML method to set content of our quizBox element to blank
// we delcare our first question variable and use .createElement method to add an h2 element
// we use .innerHTML to set the content of question1 to our questions array
// then append question1 as a child of quizBox element

// finally we a for loop to iterate over our questions array
// create a button element called option
// set the content of option to the options property of the first question object in our questions array
// and append option as a child of our quizBox element

function quizFunc() {
  quiz.innerHTML="";
  let question1 = document.createElement("h2");
  let timerOverlay = timerDisplay;
  question1.innerHTML= questions[currentQuestion].question;
  quiz.appendChild(question1);
  quiz.appendChild(timerOverlay);

  for (let i = 0; i < questions[currentQuestion].options.length; i++) {
    let option = document.createElement("button");
    option.innerHTML = questions[currentQuestion].options[i];
    quiz.appendChild(option);
  }
}

start.addEventListener("click", startFunc);
