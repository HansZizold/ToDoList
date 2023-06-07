import './style.css';
import createTaskObjectAndSave from '../modules/createtaskobjectandsave.js';
import updateLocalStorage from '../modules/updatelocalstorage.js';
import removeClickEvent from '../modules/removeclickevent.js';
import indexNormalization from '../modules/indexnormal.js';
import updateTask from '../modules/updatetask.js';
import addTask from '../modules/addtask.js';
import clearCompleted from '../modules/clearcompleted.js';
import reorderTasks from '../modules/reorder.js';

const taskDescription = document.querySelector('input');
let taskArray = [];

const attachEventListenersToTasks = () => {
  let dragStartIndex;
  let dragEndIndex;

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
      if (!Number.isNaN(dragStartIndex) && !Number.isNaN(dragEndIndex)) {
        taskArray = JSON.parse(localStorage.getItem('mytasks'));
        taskArray = reorderTasks(dragStartIndex - 1, dragEndIndex - 1, taskArray);
        // Fix indexes
        taskArray.forEach((e, i) => {
          e.index = i + 1;
        });
        // Update LS
        updateLocalStorage(taskArray);
        // Remove html elements affected
        document.querySelectorAll('.checkbox').forEach((e) => {
          e.parentElement.remove();
        });
        // Create html elements with descriptions and indexes corrected
        taskArray.forEach((e) => addTask(e.description));
        attachEventListenersToTasks();
      }
      // Reset indexes after operation
      dragStartIndex = null;
      dragEndIndex = null;
    });
  });
};
attachEventListenersToTasks();

// Event listener to detect a new task input and call addTask function
taskDescription.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && taskDescription.value) {
    event.preventDefault();
    addTask(taskDescription.value);
    createTaskObjectAndSave(taskDescription.value);
    taskDescription.value = null;
    // update taskArray from localStorage
    taskArray = JSON.parse(localStorage.getItem('mytasks'));
    // Attach the event listeners to the new elements
    attachEventListenersToTasks();
  }
});

// Load local storage data
const loadLocalStorage = () => {
  const lsTasks = JSON.parse(localStorage.getItem('mytasks')) || [];
  lsTasks.forEach((element) => {
    addTask(element.description);
  });
  attachEventListenersToTasks();
};
loadLocalStorage();

// Click listeners to remove tasks
document.addEventListener('click', (element) => {
  if (element.target.classList.contains('checkbox') || element.target.classList.contains('trash-active')) {
    taskArray = removeClickEvent(element);
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
