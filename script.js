// Create an array to store tasks
var tasks = JSON.parse(localStorage.getItem('tasks')) || [];;

// Get references to HTML elements
var taskForm = document.getElementById('taskForm');
var taskInput = document.getElementById('taskInput');
var taskList = document.getElementById('taskList');

// Add event listener to the form
taskForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  var taskText = taskInput.value.trim(); // Get task text and remove leading/trailing whitespace

  if (taskText !== '') {
    // Add task to the array
    tasks.push(taskText);

    // save tasks to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Clear the input field
    taskInput.value = '';

    // Refresh the task list
    displayTasks();
  }
});

// Function to display tasks on the page
function displayTasks() {
  // Clear the task list
  taskList.innerHTML = '';

  // Loop through the tasks array and create task items
  for (var i = 0; i < tasks.length; i++) {
    var taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    var taskText = document.createElement('span');
    taskText.textContent = tasks[i];
    taskItem.appendChild(taskText);

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('data-index', i); // Set data-index attribute to track the task index
    deleteButton.addEventListener('click', deleteTask);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
  }
}

// Function to delete a task
function deleteTask(event) {
  var index = event.target.getAttribute('data-index'); // Get the task index from the data-index attribute
  tasks.splice(index, 1); // Remove the task from the array

  // save update tasks to localStorage
  localStorage.setItem('tasks',  JSON.stringify(tasks));

  displayTasks(); // Refresh the task list
}

// Display initial tasks on page load
displayTasks();

var deleteAllTasksButton = document.getElementById('Clear');
deleteAllTasksButton.addEventListener('click', deleteAllTasks);

function deleteAllTasks() {
  tasks = [];
  // localStorage.removeItem('tasks');
  displayTasks();
}






