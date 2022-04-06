var startEl = document.querySelector("#sb");
var introEl = document.querySelector("#introId");
var questionsEl = document.querySelector("#questions");
var scoreEl = document.querySelector("#fscore");
var questiontext = document.querySelector("#qtext");
var answer1 = document.querySelector("#ans1");
var answer2 = document.querySelector("#ans2");
var answer3 = document.querySelector("#ans3");
var answer4 = document.querySelector("#ans4");
var timerEl = document.querySelector("#time");
var finalscore =document.querySelector("#finalscore")

const timed = setInterval(timer, 1000);

var count = 75;

var score = 4;

var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["script", "js", "java.jss", "scripting"],
    correct: "<script>",
  },

  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: ["Both the Head and Body are correct", "Head Section", "Nav Bar", "Body Section"],
    correct: "Both the head and body are correct",
  },

  {
    question: "How do you find the number with the highest value of x and y?",
    answers: ["top(x,y)", "math.ceil(x,y)", "ceil(x,y)", "math.max(x,y)"],
    correct: "math.max(x,y)",
  },

  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: ["onchange", "onclick", "onmouseclick", "onmouseover"],
    correct: "onclick",
  },
];

function hide(event) {
  event.preventDefault();

  introEl.classList.add("hide");

  questionsEl.classList.remove("hide");
  questionsEl.classList.add("show");

  startgame1();
}


function timer() {

  timerEl.innerHTML = count + " seconds left";
  count--;

  if (sec <= 0) {
    clearInterval(timed);
    alert("Time out!! :(")
    hide();
  }
  return;
}

function startgame1(event) {
  questiontext.innerHTML = questions[0].question;
  answer1.innerHTML = questions[0].answers[0];
  answer2.innerHTML = questions[0].answers[1];
  answer3.innerHTML = questions[0].answers[2];
  answer4.innerHTML = questions[0].answers[3];
}

function checkquestion(event) {
  if (
    event.target.innerHTML.includes("script") &&
    questiontext.innerHTML.includes("Inside which HTML element do we put the JavaScript?")
  ) {
    correct1();
  } else if (
    event.target.innerHTML.includes("Both the Head and Body are correct") &&
    questiontext.innerHTML.includes("Where is the correct place to insert a JavaScript?")
  ) {
    correct2();
  } else if (
    event.target.innerHTML.includes("math.max(x,y)") &&
    questiontext.innerHTML.includes("How do you find the number with the highest value of x and y?")
  ) {
    correct3();
  } else if (
    event.target.innerHTML.includes("onclick") &&
    questiontext.innerHTML.includes("Which event occurs when the user clicks on an HTML element?")
  ) {
    correct4();
  } else {
    incorrect();
  }
}

function incorrect() {
  count = count - 10;
  timerEl.innerHTML = count + " seconds left";
  score--


  if (questiontext.innerHTML.includes("Inside which HTML element do we put the JavaScript?")) {
    startgame2correct();
  } else if (questiontext.innerHTML.includes("Where is the correct place to insert a JavaScript?")) {
    startgame3correct();
  } else if (questiontext.innerHTML.includes("How do you find the number with the highest value of x and y?")) {
    startgame4correct();
  } else if (questiontext.innerHTML.includes("Which event occurs when the user clicks on an HTML element?")) {
    showscore();
  }
}

function correct1() {
  startgame2correct();
}

function correct2() {
  startgame3correct();
}
function correct3() {
  startgame4correct();
}

function correct4() {
  showscore();
}

function showscore() {
  clearInterval(timed);
  finalscore.innerHTML = " Your final score is " + score + " out of 4.";
  questionsEl.classList.remove("show");
  questionsEl.classList.add("hide");
  scoreEl.classList.remove("hide");
  scoreEl.classList.add("show");

  
}

function startgame2correct() {
  questiontext.innerHTML = questions[1].question;
  answer1.innerHTML = questions[1].answers[0];
  answer2.innerHTML = questions[1].answers[1];
  answer3.innerHTML = questions[1].answers[2];
  answer4.innerHTML = questions[1].answers[3];
}

function startgame3correct() {
  questiontext.innerHTML = questions[2].question;
  answer1.innerHTML = questions[2].answers[0];
  answer2.innerHTML = questions[2].answers[1];
  answer3.innerHTML = questions[2].answers[2];
  answer4.innerHTML = questions[2].answers[3];
}

function startgame4correct() {
  questiontext.innerHTML = questions[3].question;
  answer1.innerHTML = questions[3].answers[0];
  answer2.innerHTML = questions[3].answers[1];
  answer3.innerHTML = questions[3].answers[2];
  answer4.innerHTML = questions[3].answers[3];
}

// adding event listeners to each answer button
answer1.addEventListener("click", checkquestion);
answer2.addEventListener("click", checkquestion);
answer3.addEventListener("click", checkquestion);
answer4.addEventListener("click", checkquestion);

startEl.addEventListener("click", hide);
