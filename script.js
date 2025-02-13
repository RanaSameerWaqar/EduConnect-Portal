document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify([]));
    }
});

function signup() {
    let role = document.getElementById("role").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users"));

    if (users.some(user => user.username === username)) {
        alert("User already exists!");
        return;
    }

    users.push({ username, password, role });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful!");
}

function login() {
    let role = document.getElementById("role").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (role === "admin" && username === "Admin" && password === "Admin123@") {
        window.location.href = "admin.html";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users"));
    let user = users.find(user => user.username === username && user.password === password);

    if (!user) {
        alert("Invalid login credentials!");
        return;
    }

    if (user.role !== role) {
        alert("Incorrect role selection!");
        return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = role + ".html";
}
