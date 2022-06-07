// Function to give format when pressing some checkbox
// Also it changes the status of a task (true/false) and update LS
const checkboxFormat = (element) => {
  if (element.target.classList.contains('checkbox')) {
    element.target.parentNode.classList.toggle('checked-task');
    element.target.nextElementSibling.classList.toggle('line-task');
    element.target.parentElement.lastElementChild.classList.toggle('trash-active');
    element.target.parentElement.lastElementChild.previousElementSibling.classList.toggle('edit-inactive');
    // Mark task completed and update LS
    const completedindex = element.target.parentNode.id - 1;
    const lsTasks = JSON.parse(localStorage.getItem('mytasks'));
    lsTasks[completedindex].completed = !lsTasks[completedindex].completed;
    localStorage.setItem('mytasks', JSON.stringify(lsTasks));
  }
};
export default checkboxFormat;
