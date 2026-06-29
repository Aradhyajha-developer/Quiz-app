// ==========================
// Quiz Questions
// ==========================

const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Tool Multi Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "What year was JavaScript created?",
    options: [
      "1992",
      "1995",
      "2000",
      "2005"
    ],
    answer: "1995"
  },
  {
    question: "Which keyword is used to create a constant variable?",
    options: [
      "let",
      "var",
      "const",
      "define"
    ],
    answer: "const"
  },
  {
    question: "Which method selects an element by ID?",
    options: [
      "querySelector()",
      "getById()",
      "getElementById()",
      "getElementsByClassName()"
    ],
    answer: "getElementById()"
  },
  {
    question: "Which one is a JavaScript data type?",
    options: [
      "real",
      "decimal",
      "number",
      "float"
    ],
    answer: "number"
  }
];

// ==========================
// Selecting HTML Elements
// ==========================

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("next-btn");
const questionNumber = document.getElementById("question-number");

// ==========================
// Variables
// ==========================

let currentQuestion = 0;
let score = 0;
let selectedOption = "";

// ==========================
// Load Question
// ==========================

function loadQuestion() {

  const current = quizData[currentQuestion];

  questionNumber.textContent =
    `Question ${currentQuestion + 1} of ${quizData.length}`;

  questionEl.textContent = current.question;

  optionBtns.forEach((btn, index) => {

    btn.textContent = current.options[index];

    btn.classList.remove("selected");
    btn.classList.remove("correct");
    btn.classList.remove("wrong");

    btn.disabled = false;

  });

  selectedOption = "";

  nextBtn.disabled = true;

}

// ==========================
// Option Click
// ==========================

optionBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    optionBtns.forEach(option => {

      option.classList.remove("selected");

    });

    btn.classList.add("selected");

    selectedOption = btn.textContent;

    nextBtn.disabled = false;

  });

});

// ==========================
// Next Button
// ==========================

nextBtn.addEventListener("click", () => {

  const correctAnswer = quizData[currentQuestion].answer;

  optionBtns.forEach(btn => {

    btn.disabled = true;

    if (btn.textContent === correctAnswer) {

      btn.classList.add("correct");

    }

    if (
      btn.textContent === selectedOption &&
      selectedOption !== correctAnswer
    ) {

      btn.classList.add("wrong");

    }

  });

  if (selectedOption === correctAnswer) {

    score++;

  }

  nextBtn.disabled = true;

  setTimeout(() => {

    currentQuestion++;

    if (currentQuestion < quizData.length) {

      loadQuestion();

    } else {

      showResult();

    }

  }, 1000);

});



function showResult() {

  let grade = "";
  let emoji = "";
  let message = "";

  if (score === 5) {

    grade = "Excellent";
    emoji = "🏆";
    message = "Outstanding! You answered every question correctly.";

  } else if (score === 4) {

    grade = "Very Good";
    emoji = "🌟";
    message = "Great job! You have a strong understanding.";

  } else if (score === 3) {

    grade = "Good";
    emoji = "😊";
    message = "Nice work! Keep practicing to improve.";

  } else if (score === 2) {

    grade = "Fair";
    emoji = "👍";
    message = "You are learning well. Practice a little more.";

  } else if (score === 1) {

    grade = "Improve";
    emoji = "📚";
    message = "Don't worry! Revise the basics and try again.";

  } else {

    grade = "Poor";
    emoji = "❌";
    message = "Keep learning. Practice makes perfect.";

  }

  document.getElementById("quiz").innerHTML = `

    <div class="result">

      <h2>${emoji} Quiz Completed!</h2>

      <h3>Performance Grade</h3>

      <p>${grade}</p>

      <h4>You Answered ${score} Out of ${quizData.length} Correctly</h4>

      <br>

      <p style="font-size:18px;">
        ${message}
      </p>

      <br>

      <button onclick="location.reload()">
        🔄 Play Again
      </button>

    </div>

  `;

}

// ==========================
// Start Quiz
// ==========================

loadQuestion();