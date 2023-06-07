import updateLocalStorage from './updatelocalstorage.js';
// Function to remove the task from LS and to remove task html code
const removehtml = (element) => {
  // Check if the clicked element is a delete button
  if (element.target.classList.contains('trash-active')) {
    const deleteindex = element.target.parentNode.id;
    // Retrieve the tasks from local storage
    let lsTasks = JSON.parse(localStorage.getItem('mytasks'));
    // Filter out the task that should be deleted
    lsTasks = lsTasks.filter((task) => task.index !== Number(deleteindex));
    // Normalize indexes
    lsTasks.forEach((e, i) => {
      e.index = i + 1;
    });
    // Update local storage with the updated tasks
    updateLocalStorage(lsTasks);
    // Remove the HTML element of the task
    element.target.parentNode.remove();
    // Return the updated tasks
    return lsTasks;
  }
  return null;
};
export default removehtml;
