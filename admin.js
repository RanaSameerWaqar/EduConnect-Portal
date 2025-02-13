document.addEventListener("DOMContentLoaded", loadUsers);

function loadUsers() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let usersList = document.getElementById("usersList");

    usersList.innerHTML = "";

    users.forEach((user, index) => {
        usersList.innerHTML += `
            <p>
                <strong>${user.username}</strong> (${user.role})
                <button onclick="removeUser(${index})" class="delete-btn">Remove</button>
            </p>
        `;
    });
}

function removeUser(index) {
    let users = JSON.parse(localStorage.getItem("users"));
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    loadUsers();
}

function clearAllUsers() {
    if (confirm("Are you sure you want to delete all users?")) {
        localStorage.setItem("users", JSON.stringify([]));
        loadUsers();
    }
}
