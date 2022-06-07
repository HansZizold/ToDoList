// Function to give format when pressing some checkbox
const checkboxFormat = (element) => {
  if (element.target.classList.contains('checkbox')) {
    element.target.parentNode.classList.toggle('checked-task');
    element.target.nextElementSibling.classList.toggle('line-task');
    element.target.parentElement.lastElementChild.classList.toggle('trash-active');
    element.target.parentElement.lastElementChild.previousElementSibling.classList.toggle('edit-inactive');
  }
};
export default checkboxFormat;
