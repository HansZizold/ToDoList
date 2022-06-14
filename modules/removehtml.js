// Function to remove the task from LS and to remove task html code
const removehtml = (element) => {
  if (element.target.classList.contains('trash-active')) {
    const deleteindex = element.target.parentNode.id;
    // Recover the LS data
    let lsTasks = JSON.parse(localStorage.getItem('mytasks'));
    // Remove the task deleted
    lsTasks = lsTasks.filter((task) => task.index !== Number(deleteindex));
    // Fix indexes
    lsTasks.forEach((e, i) => e.index = i + 1);
    // Update the LS data and taskArray
    localStorage.setItem('mytasks', JSON.stringify(lsTasks));
    // Remove task html code
    element.target.parentNode.remove();
  }
};
export default removehtml;
