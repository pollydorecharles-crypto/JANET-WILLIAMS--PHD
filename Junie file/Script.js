/**
 * Simple To-Do List - script.js
 * Adds new tasks to the list when the button is clicked.
 */

// 1. Get references to the key HTML elements
const inputField = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// 2. Define the function that adds a new task
function addTask() {
    // Get the text from the input field and remove extra spaces
    const taskText = inputField.value.trim();

    // Check if the input is not empty
    if (taskText === "") {
        alert("Please enter a task before adding!");
        return; // Stop the function if empty
    }

    // 3. Create a new <li> element
    const newListItem = document.createElement('li');
    
    // Set the text content of the new element
    newListItem.textContent = taskText;

    // 4. Append the new list item to the <ul> element
    taskList.appendChild(newListItem);

    // 5. Clear the input field for the next task
    inputField.value = '';

    console.log(`New task added: "${taskText}"`);
}

// 6. Attach the 'addTask' function to the 'click' event of the button
addButton.addEventListener('click', addTask);

// Optional: Also allow adding a task by pressing the 'Enter' key
inputField.addEventListener('keypress', function (event) {
    // Check if the key pressed is the 'Enter' key (key code 13)
    if (event.key === 'Enter') {
        addTask();
    }
});

console.log("To-Do List script successfully loaded.");