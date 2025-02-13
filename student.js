document.addEventListener("DOMContentLoaded", loadQuestions);

function submitQuestion() {
    let question = document.getElementById("question").value;
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    let questions = JSON.parse(localStorage.getItem("questions")) || [];
    questions.push({ student: currentUser.username, question, answer: "" });

    localStorage.setItem("questions", JSON.stringify(questions));
    alert("Question submitted!");
    loadQuestions();
}

function loadQuestions() {
    let questions = JSON.parse(localStorage.getItem("questions")) || [];
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    let historyDiv = document.getElementById("questionHistory");
    historyDiv.innerHTML = "";

    questions
        .filter(q => q.student === currentUser.username)
        .forEach(q => {
            historyDiv.innerHTML += `<p>Q: ${q.question}<br> A: ${q.answer || "Not answered yet"}</p>`;
        });
}
