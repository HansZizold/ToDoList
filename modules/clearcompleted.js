import updateLocalStorage from './updatelocalstorage.js';
// Function to remove a group of tasks
const clearCompleted = () => {
  // Remove html tasks
  document.querySelectorAll('.checkbox').forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.parentNode.remove();
    }
  });
  // Update LS and normalize indexes
  let lsTasks = JSON.parse(localStorage.getItem('mytasks'));
  lsTasks = lsTasks.filter(({ completed }) => !completed);
  lsTasks.forEach((task, i) => {
    task.index = i + 1;
  });
  updateLocalStorage(lsTasks);
};
export default clearCompleted;
