// Function to remove a group of tasks
const clearCompleted = () => {
  const checkbox = document.querySelectorAll('.checkbox');
  // Remove html tasks
  checkbox.forEach((e) => {
    if (e.checked) {
      e.parentNode.remove();
    }
  });
  // Update LS and normalize indexes
  let lsTasks = JSON.parse(localStorage.getItem('mytasks'));
  lsTasks = lsTasks.filter((element) => element.completed !== true);
  lsTasks.forEach((e, i) => e.index = i + 1);
  localStorage.setItem('mytasks', JSON.stringify(lsTasks));
};
export default clearCompleted;