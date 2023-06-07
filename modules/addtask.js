const addTask = (taskText) => {
  const AllTasksContainer = document.querySelector('.all-tasks-container');

  // create a new div and add the 'task-container' class to it
  const taskdiv = document.createElement('div');
  taskdiv.className = 'task-container';
  taskdiv.draggable = 'true';

  // create the checkbox input element
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';
  taskdiv.appendChild(checkbox);

  // create the text input element
  const taskChange = document.createElement('input');
  taskChange.type = 'text';
  taskChange.value = taskText;
  taskChange.className = 'task-change';
  taskdiv.appendChild(taskChange);

  // create the ellipsis icon element
  const ellipsisIcon = document.createElement('i');
  ellipsisIcon.className = 'fas fa-ellipsis-v';
  taskdiv.appendChild(ellipsisIcon);

  // create the trash icon element
  const trashIcon = document.createElement('i');
  trashIcon.className = 'fas fa-trash-alt';
  taskdiv.appendChild(trashIcon);

  // append the taskdiv element to the AllTasksContainer
  AllTasksContainer.appendChild(taskdiv);

  // assign an id to the taskdiv element
  taskdiv.id = document.querySelectorAll('.checkbox').length;

  // Add event listener to the newly created ellipsis element
  ellipsisIcon.addEventListener('click', (event) => {
    const end = event.target.parentElement.children[1].value.length;
    event.target.parentElement.children[1].setSelectionRange(end, end);
    event.target.parentElement.children[1].focus();
  });
};
export default addTask;
