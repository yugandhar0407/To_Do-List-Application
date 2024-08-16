function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskInput.value}</span>
        <div>
            <button class="edit-btn" onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function editTask(button) {
    const li = button.parentNode.parentNode;
    const span = li.querySelector("span");
    const newTask = prompt("Edit task:", span.textContent);

    if (newTask !== null && newTask.trim() !== "") {
        span.textContent = newTask;
    }
}

function deleteTask(button) {
    const li = button.parentNode.parentNode;
    li.remove();
}