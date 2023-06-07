import updateLocalStorage from './updatelocalstorage.js';
// Function to update the description of a task in local storage
const updateTask = (element) => {
  // Check if the changed element is a task description
  if (element.target.classList.contains('task-change')) {
    // Retrieve the tasks from local storage
    const lsTasks = JSON.parse(localStorage.getItem('mytasks'));
    // Update the description of the task in the tasks array
    lsTasks[element.target.parentNode.id - 1].description = element.target.value;
    // Update local storage with the updated tasks
    updateLocalStorage(lsTasks);
  }
};
export default updateTask;
