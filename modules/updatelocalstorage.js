const updateLocalStorage = (taskArray) => {
  localStorage.setItem('mytasks', JSON.stringify(taskArray));
};

export default updateLocalStorage;
