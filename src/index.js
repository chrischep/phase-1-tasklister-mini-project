document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // Working on the solution for the task lis
  document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    // retrieve form data
    const userForm = document.getElementById("create-task-form");
    userForm.addEventListener("submit", (e) => {
     //prevent form from doing default behaviour
      e.preventDefault();
      const inputTask = document.getElementById("new-task-description");
      const taskItem = document.createElement("li");
      const eList = document.getElementById("tasks");
      
      inputTask.innerText = inputTask.value;
      eList.appendChild(taskItem);
      e.target.reset();
    });
  });
});
