// Empty array for the task items
// Import function 'appendHTML'
import appendHTML from './appendhtml.js';

const mytasks = [];

// Create a todo object with the description of the new task
function addTask(description) {
  const todo = {
    description,
    completed: false,
    id: Date.now(),
  };

  mytasks.push(todo);
  appendHTML(todo);
}

export default addTask;