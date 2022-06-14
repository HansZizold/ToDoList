// Function to update indexes in html code
const indexNormalization = (checkbox) => {
  checkbox.forEach((e, i) => {
    e.parentElement.id = i + 1;
  });
};
export default indexNormalization;
