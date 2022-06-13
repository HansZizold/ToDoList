const AllTasksContainer = document.querySelector('.all-tasks-container');
let checkbox = [];

const addTask = (taskText) => {
  checkbox = document.querySelectorAll('.checkbox');
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
  // insert the html code in the todos-container position
  AllTasksContainer.appendChild(taskdiv);
};
export default addTask;