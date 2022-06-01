function appendHTML(todo) {
  // Select the element with a class `ultask`
  const ultask = document.querySelector('.ultask');

  // If 'todo.completed' is true, 'done' is assigned, otherwise an empty string
  const isCompleted = todo.completed ? 'done' : '';
  // Create a 'li' element and assign it to 'litask'
  const litask = document.createElement('li');
  // Set the class attribute
  litask.setAttribute('class', `litask ${isCompleted}`);
  // Set the data-key attribute to the id of the todo
  litask.setAttribute('data-key', todo.id);
  // Set the contents of the `li` element created above
  litask.innerHTML = `
    <label><input id="${todo.id}" class="taskcompleted" type="checkbox">${todo.description}</label>
    <p class="threedots">&#8278;</p>
  `;
  // Append the task to the list
  ultask.append(litask);
}

export default appendHTML;
