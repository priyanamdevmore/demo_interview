// Placeholder Questions
const technicalQuestions = [
  "Explain Closure in JavaScript",
  "What is REST API?",
  "Difference between var, let, const?",
  "What is React?",
  "Explain async/await"
];

const hrQuestions = [
  "Tell me about yourself",
  "Why should we hire you?",
  "What are your strengths?",
  "Where do you see yourself in 5 years?",
  "Describe a challenge you faced"
];

let currentQuestion = 0;
let selectedType = localStorage.getItem("interviewType") || "technical";
let score = 0;

function selectInterview(type) {
  localStorage.setItem("interviewType", type);
  if (type === 'behavioural') {
    window.location.href = "interviewprep/behavioral.html";
  } else if (type === 'hr') {
    window.location.href = "interviewprep/hrque.html";
  } else if (type === 'dsa') {
    window.location.href = "interviewprep/dsaque.html";
  } else if (type === 'database') {
    window.location.href = "interviewprep/databaseque.html";
  } else if (type === 'managerial') {
    window.location.href = "interviewprep/managerial.html";
  } else if (type === 'technical') {
    window.location.href = "interviewprep/technical.html";
  } else {
    window.location.href = "interview.html";
  }
}

function nextQuestion() {
  let questions = selectedType === "technical" ? technicalQuestions : hrQuestions;

  if (currentQuestion < questions.length) {
    document.getElementById("question").innerText = questions[currentQuestion];
    currentQuestion++;
    score += Math.floor(Math.random() * 20); // AI scoring placeholder
  } else {
    localStorage.setItem("score", score);
    window.location.href = "analytics.html";
  }
}

window.onload = function () {
  if (document.getElementById("score")) {
    document.getElementById("score").innerText = localStorage.getItem("score");
  }
};