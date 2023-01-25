
//Delcare a questions varriable as an array of objects 
// aswell as some other golbal variables

var questions = [
  {
    question: "Commonly used data types do not include?",
    options: ["Booleans", "Strings", "Numbers", "map"],
    correctAnswer: "map"
  },
  {
    question: "The condition in an if / else statement is enclosed within?",
    options: ["quotes", "curly brackets", "parentheses", "Square brackets"],
    correctAnswer: "curly brackets"
  },
  {
    question: "Arrays in javaScript can be used to store?",
    options: ["numbers and stings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above"
  },
  {
    question: "String values must be enclosed within _____ when being assigned to varibles?",
    options: ["commas", "curley brackets", "quotes", "parentheses"],
    correctAnswer: "quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:?",
    options: ["javaScript", "terminal / bash", "for loops", "console log"],
    correctAnswer: "console log"
  },
];

var initialsArray = [];

var currentQuestion = 0;
let timer = 60;
let score = 0;

let start = document.getElementById('startBtn');
let timerDisplay = document.getElementById("timer");
let quiz = document.getElementById("quizBox");

// Create a start function that calls our Quiz function and uses setInterval() 
// to initialize the timer decrementing by 1 second
// when timer = 0 clearInterval end countDown and runs endQuiz function

function startFunc() {
    quizFunc();
    let countDown = setInterval(function() {
    timer--;
    timerDisplay.textContent = timer;
    if (timer <= 0) {
        clearInterval(countDown);
        endQuiz();
    }
  }, 1000);
}

// Createed our quiz function 
// call our quiz variable and use the .innerHTML method to set content of our quizBox element to blank
// we delcare our question variable and use .createElement method to add an h2 element
// we use .innerHTML to set the content of question1 to our questions array
// then append question1 as a child of quizBox element

// finally we use a for loop to iterate over our questions array
// create a button element called option
// set the content of option to the options property of the first question object in our questions array
// and append option as a child of our quizBox element

function quizFunc() {
  quiz.innerHTML="";
  quiz.setAttribute("id", "quiz-id");
  start.style.display="none";
  let question = document.createElement("h2");
  let timerOverlay = timerDisplay;
  question.innerHTML= questions[currentQuestion].question;
  quiz.appendChild(question);
  quiz.appendChild(timerOverlay);

  for (let i = 0; i < questions[currentQuestion].options.length; i++) {
    let option = document.createElement("button");
    option.innerHTML = questions[currentQuestion].options[i];
    option.setAttribute("id", "options-id");
    option.setAttribute("onclick", "checkAnswer(this)");
    quiz.appendChild(option);
  }
}

// we create a checkAnswer function pass option as the first argument
// the function returns a conditional statement that checks if the answer is correct 
// and increments the score by + 1 if correct decrements the timer -10 if incorrect
// when and answer is clicked the currentQuestion variable is incremented by + 1 
// if the timer isnt = to 0 we run the quizFunc again to procced to the next question
// otherwise if timer <= 0 endQuiz function will execute 

function checkAnswer (option) {
  if (option.innerHTML === questions[currentQuestion].correctAnswer) {
    score++;
  } else {
    timer -= 10;
  }
  currentQuestion++;
  if (currentQuestion === questions.length || timer <= 0) {
    endQuiz();
  }
 else {
  quizFunc(); 
  }
}

function saveFunc() {
  let saveForm = document.getElementById("scoreBoard");
  saveForm.style.display = "block";
  saveForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let initials = document.getElementById("inits").value;
    console.log(initials);
    let results = {
      inits: initials,
      score: score
    };
    let scoreBoard = document.createElement("li");
    const textnode = document.createTextNode(initials);
    scoreBoard.appendChild(textnode); 
    // scoreBoard = results
    // score.textContent = initials;
    
    
    initialsArray.push(JSON.stringify(results));
    
    localStorage.setItem("initials", initialsArray)
    
    quiz.appendChild(scoreBoard);


  });
}

// Created endQuiz function 
// when called it sets the content of our quizBox to blank
// and reassigns its id to quiz-id in the local scope
// decalare finalScore variable as new h2 element
// set the content of it to our score variable
// and finally append it as child of quiz

function endQuiz() {
  quiz.innerHTML = "";
  quiz.setAttribute("id", "quiz-id");
  let finalScore = document.createElement("h2");
  finalScore.innerHTML = "Your final score is: " + score;


  quiz.appendChild(finalScore);
  
  saveFunc();
}

 start.addEventListener("click", startFunc);
