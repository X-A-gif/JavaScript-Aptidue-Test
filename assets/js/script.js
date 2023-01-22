let timer = 1;

let start = document.getElementById('startBtn');
let timerDisplay = document.getElementById("timer");
let quiz = document.getElementById("quizBox");

function startFunc() {
    quiz.innerHTML="";
    let question1 = document.createElement("h2");
    question1.innerHTML= questions[0]

    let countDown = setInterval(function() {
    timer--;
    timerDisplay.textContent = timer;
    if (timer <= 0) {
        clearInterval(countDown);
        console.log("Time's up!");
        console.log(timer);
    }
  }, 1000);
}

start.addEventListener("click", startFunc);
