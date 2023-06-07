const reorderTasks = (start, end, array) => {
  const [removed] = array.splice(start, 1);
  array.splice(end, 0, removed);
  return array;
};
export default reorderTasks;
