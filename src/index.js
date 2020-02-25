document.addEventListener("DOMContentLoaded", () => {
  // select your DOM nodes / el
  const newTaskForm = document.querySelector("#create-task-form");
  const newTaskDescription = document.querySelector("#new-task-description");
  const newTaskPriority = document.querySelector("#new-task-priority");

  // ul the new tasks
  const newTaskUl = document.querySelector("#tasks");

  newTaskForm.addEventListener("submit", event => {
    event.preventDefault();
    // stop the form from trying to submit
    newTask = document.createElement("li")
    newTask.innerText = newTaskDescription.value;

    newTaskUl.appendChild(newTask);
    event.target.reset();
  })
});
