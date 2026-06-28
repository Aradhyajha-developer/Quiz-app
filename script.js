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