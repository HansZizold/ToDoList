const addTask = (taskText) => {
  const AllTasksContainer = document.querySelector('.all-tasks-container');
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
  // insert the html code in the todos-container position
  AllTasksContainer.appendChild(taskdiv);

  // Add event listener to the newly created ellipsis element
  const ellipsisElement = taskdiv.querySelector('.fa-ellipsis-v');
  ellipsisElement.addEventListener('click', (event) => {
    const end = event.target.parentElement.children[1].value.length;
    event.target.parentElement.children[1].setSelectionRange(end, end);
    event.target.parentElement.children[1].focus();
  });
};
export default addTask;
