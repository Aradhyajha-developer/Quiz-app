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
// Variables
// ==========================

let currentQuestion = 0;
let score = 0;
let selectedOption = "";

console.log(quizData);
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

        btn.disabled = false;

    });

    selectedOption = "";

    nextBtn.disabled = true;

}
// ==========================
// Selecting HTML Elements
// ==========================

const questionEl = document.getElementById("question");

const optionBtns = document.querySelectorAll(".option-btn");

const nextBtn = document.getElementById("next-btn");

const questionNumber = document.getElementById("question-number");
loadQuestion();
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

    if (selectedOption === quizData[currentQuestion].answer) {

        score++;

    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {

        loadQuestion();

    } else {

        showResult();

    }

});