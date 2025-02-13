document.addEventListener("DOMContentLoaded", loadQuestions);

function loadQuestions() {
    let questions = JSON.parse(localStorage.getItem("questions")) || [];
    let listDiv = document.getElementById("questionsList");
    listDiv.innerHTML = "";

    questions.forEach((q, index) => {
        if (!q.answer) {
            listDiv.innerHTML += `
                <p>${q.question}</p>
                <input type="text" id="answer${index}" placeholder="Answer">
                <button onclick="submitAnswer(${index})">Submit</button>
                <hr>
            `;
        }
    });
}

function submitAnswer(index) {
    let answer = document.getElementById(`answer${index}`).value;
    let questions = JSON.parse(localStorage.getItem("questions"));

    questions[index].answer = answer;
    localStorage.setItem("questions", JSON.stringify(questions));
    loadQuestions();
}
