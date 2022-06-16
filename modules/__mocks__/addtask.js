const addTask = (taskText) => {
  const checkbox = document.querySelectorAll('.checkbox');
  const taskdiv = document.createElement('div');
  // assign the class 'task-container'
  taskdiv.className = 'task-container';
  taskdiv.draggable = 'true';
  // insert the html code for each task to the div variable
  taskdiv.innerHTML += `
    <input type="checkbox" class="checkbox">
    <input type='text' value='${taskText}' class='task-change'>
    <i class="fas fa-ellipsis-v"></i>
    <i class="fas fa-trash-alt"></i>
  `;
  taskdiv.id = checkbox.length + 1;
  // download LS
  const lsTasks = JSON.parse(localStorage.getItem('mytests'));
  // update lsTasks
  const taskObject = {
    description: taskText,
    completed: false,
    index: checkbox.length + 1,
  };
  lsTasks.push(taskObject);
  // update local storage
  localStorage.setItem('mytests', JSON.stringify(lsTasks));
  return lsTasks;
};
export default addTask;