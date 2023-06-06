import updateLocalStorage from "./updatelocalstorage";
// Update function: LS
const updateTask = (element) => {
  if (element.target.classList.contains('task-change')) {
    // Recover the LS data
    const lsTasks = JSON.parse(localStorage.getItem('mytasks'));
    lsTasks[element.target.parentNode.id - 1].description = element.target.value;
    updateLocalStorage(lsTasks);
  }
};
export default updateTask;
