import updateLocalStorage from './updatelocalstorage.js';

const createTaskObjectAndSave = (description) => {
  // Get existing tasks from localStorage
  const taskArray = JSON.parse(localStorage.getItem('mytasks')) || [];
  // Create a new task object
  const taskObject = {
    description,
    completed: false,
    index: taskArray.length + 1,
  };
  // Add the new task to the existing tasks
  taskArray.push(taskObject);
  // Save all tasks back to localStorage
  updateLocalStorage(taskArray);
};
export default createTaskObjectAndSave;
