import './style.css';
import checkboxFormat from '../modules/checkboxformat.js';
import indexNormalization from '../modules/indexnormal.js';
import updateTask from '../modules/updatetask.js';
import removehtml from '../modules/removehtml.js';
import addTask from '../modules/addtask.js';
import clearCompleted from '../modules/clearcompleted.js';
import reorderTasks from '../modules/reorder.js';

const taskDescription = document.querySelector('input');
let checkbox = []; let taskArray = [];

// Event listener to detect a new task input and call addTask function
taskDescription.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && taskDescription.value) {
    checkbox = document.querySelectorAll('.checkbox');
    event.preventDefault();
    taskArray = addTask(taskDescription.value);
    taskDescription.value = null;
    checkbox = document.querySelectorAll('.checkbox');
  }
});

// Load local storage data
const loadLocalStorage = () => {
  const lsTasks = JSON.parse(localStorage.getItem('mytasks'));
  if (lsTasks !== null) {
    lsTasks.forEach((element) => {
      checkbox = document.querySelectorAll('.checkbox');
      addTask(element.description);
      // update the taskArray
      const taskObject = {
        description: element.description,
        completed: false,
        index: checkbox.length + 1,
      };
      taskArray.push(taskObject);
      localStorage.setItem('mytasks', JSON.stringify(taskArray));
    });
  }
};
loadLocalStorage();

// Click listener to remove tasks
document.addEventListener('click', (element) => {
  if (element.target.classList.contains('checkbox')
  || element.target.classList.contains('trash-active')) {
    checkboxFormat(element);
    removehtml(element);
    indexNormalization(document.querySelectorAll('.checkbox'));
    taskArray = JSON.parse(localStorage.getItem('mytasks'));
  }
});

// Change listener to edit tasks
document.addEventListener('change', (element) => {
  updateTask(element);
});

// Listener for clear completed tasks button
document.addEventListener('click', (element) => {
  if (element.target.classList.contains('clear-completed')) {
    clearCompleted();
    indexNormalization(document.querySelectorAll('.checkbox'));
    taskArray = JSON.parse(localStorage.getItem('mytasks'));
  }
});

// Listener por focus input field
document.addEventListener('click', (element) => {
  if (element.target.classList.contains('fa-ellipsis-v')) {
    const end = element.target.parentElement.children[1].value.length;
    element.target.parentElement.children[1].setSelectionRange(end, end);
    element.target.parentElement.children[1].focus();
  }
});

// Select the draggable element
let dragStartIndex; let dragEndIndex;
document.querySelectorAll('.task-container').forEach((task) => {
  task.addEventListener('dragstart', () => {
    dragStartIndex = +task.closest('div').getAttribute('id');
  });
  task.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  task.addEventListener('dragenter', () => {
    task.classList.add('drag-over');
  });
  task.addEventListener('dragleave', () => {
    task.classList.remove('drag-over');
  });
  task.addEventListener('drop', () => {
    dragEndIndex = +task.closest('div').getAttribute('id');
    taskArray = reorderTasks(dragStartIndex - 1, dragEndIndex - 1, taskArray);
    // Fix indexes
    taskArray.forEach((e, i) => {
      e.index = i + 1;
    });
    // Update LS
    localStorage.setItem('mytasks', JSON.stringify(taskArray));
    // Remove html elements affected
    document.querySelectorAll('.checkbox').forEach((e) => {
      e.parentElement.remove();
    });
    // Create html elements with descriptions and indexes corrected
    taskArray.forEach((e) => addTask(e.description));
  });
});
