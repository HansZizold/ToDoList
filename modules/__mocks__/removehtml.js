// Function to remove the task from LS and to remove task html code
const removehtml = (element) => {
  const deleteindex = element.index;
  // Recover the LS data
  let lsTasks = JSON.parse(localStorage.getItem('mytests'));
  // Remove the task deleted
  lsTasks = lsTasks.filter((task) => task.index !== Number(deleteindex));
  // Fix indexes
  lsTasks.forEach((e, i) => {
    e.index = i + 1;
  });
  // Update the LS data and taskArray
  localStorage.setItem('mytests', JSON.stringify(lsTasks));
};
export default removehtml;
