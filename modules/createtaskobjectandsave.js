import updateLocalStorage from "./updatelocalstorage";
const createTaskObjectAndSave = (description, taskArray) => {
  const taskObject = {
    description,
    completed: false,
    index: taskArray.length + 1,
  };
  taskArray.push(taskObject);
  localStorage.setItem('mytasks', JSON.stringify(taskArray));
  updateLocalStorage(taskArray);
};

export default createTaskObjectAndSave;
