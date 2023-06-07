import updateLocalStorage from './updatelocalstorage.js';
// Function to give format when pressing some checkbox
// Also it changes the status of a task (true/false) and update LS
const checkboxFormat = (element) => {
  if (element.target.classList.contains('checkbox')) {
    const parentElement = element.target.parentNode;
    const lastChildElement = parentElement.lastElementChild;
    const previousSiblingElement = lastChildElement.previousElementSibling;

    parentElement.classList.toggle('checked-task');
    element.target.nextElementSibling.classList.toggle('line-task');
    lastChildElement.classList.toggle('trash-active');
    previousSiblingElement.classList.toggle('edit-inactive');

    // Mark task completed and update LS
    const completedindex = parentElement.id - 1;
    const lsTasks = JSON.parse(localStorage.getItem('mytasks'));
    lsTasks[completedindex].completed = !lsTasks[completedindex].completed;
    updateLocalStorage(lsTasks);
  }
  return undefined;
};

export default checkboxFormat;
