import _ from 'lodash';
import '../src/style.css';

// Import function 'addtask'
import addTask from '../modules/addtask.js';

// THIS PART IS FOR INTRODUCING PROJECTS TO THE LIST AND DISPLAYING THEM IN THE PAGE
// Select the form
const formtask = document.querySelector('.formtask');
// Add a submit event listener
formtask.addEventListener('submit', (event) => {
  // prevent page refresh on form submission
  event.preventDefault();
  // select the text input
  const newtaskdescription = document.querySelector('.newtask');
  // Get the value of the input and remove whitespaces
  const newtask = newtaskdescription.value.trim();
  // If newtask is not empty we execute addTask
  if (newtask !== '') {
    addTask(newtask);
    newtaskdescription.value = '';
    newtaskdescription.focus();
  }
});
