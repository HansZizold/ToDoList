// Update function: LS
const updateTask = (element) => {
  // Recover the LS data
  const lsTasks = JSON.parse(localStorage.getItem('mytests'));
  lsTasks[1].description = element;
  localStorage.setItem('mytests', JSON.stringify(lsTasks));
};
export default updateTask;
