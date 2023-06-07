import checkboxFormat from './checkboxformat.js';
import removehtml from './removehtml.js';
import indexNormalization from './indexnormal.js';

// Function to remove and normaliza tasks
const removeClickEvent = (element) => {
  checkboxFormat(element);
  const lsTasks = removehtml(element);
  indexNormalization(document.querySelectorAll('.checkbox'));
  return lsTasks;
};
export default removeClickEvent;
