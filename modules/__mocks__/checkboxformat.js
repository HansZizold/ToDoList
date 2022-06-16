// Function to give format when pressing some checkbox
// Also it changes the status of a task (true/false) and update LS
const checkboxFormat = (element) => {
    // Mark task completed and update LS
    const completedindex = element;
    const lsTasks = JSON.parse(localStorage.getItem('mytests'));
    lsTasks[completedindex-1].completed = !lsTasks[completedindex-1].completed;
    localStorage.setItem('mytests', JSON.stringify(lsTasks));
};
export default checkboxFormat;
