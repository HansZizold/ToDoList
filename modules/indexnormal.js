// Function to update indexes in html code
const indexNormalization = (checkbox) => {
  // checkbox = document.querySelectorAll('.checkbox');
  for (let i = 0; i < checkbox.length; i += 1) {
    checkbox[i].parentElement.id = i + 1;
  }
};
export default indexNormalization;
