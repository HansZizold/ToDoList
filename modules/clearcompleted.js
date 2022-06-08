// Function to remove a group of tasks
const clearCompleted = () => {
  const checkbox = document.querySelectorAll('.checkbox');
  // Remove html tasks
  for (let i = 0; i < checkbox.length; i += 1) {
    if (checkbox[i].checked) {
      checkbox[i].parentNode.remove();
    }
  }
  // Update LS and normalize indexes
  let lsTasks = JSON.parse(localStorage.getItem('mytasks'));
  lsTasks = lsTasks.filter((element) => element.completed !== true);
  for (let i = 0; i < lsTasks.length; i += 1) {
    lsTasks[i].index = i + 1;
  }
  localStorage.setItem('mytasks', JSON.stringify(lsTasks));
};
export default clearCompleted;