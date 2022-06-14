const reorderTasks = (start, end, array) => {
  const arrtmp = [];
  arrtmp[end] = array[start];
  if (start > end) {
    for (let i = 0; i < array.length; i += 1) {
      if (i > end && i <= start) {
        arrtmp[i] = array[i - 1];
      }
      if (i < end || i > start) {
        arrtmp[i] = array[i];
      }
    }
    return arrtmp;
  }

  for (let i = 0; i < array.length; i += 1) {
    if (i >= start && i < end) {
      arrtmp[i] = array[i + 1];
    }
    if (i < start || i > end) {
      arrtmp[i] = array[i];
    }
  }
  return arrtmp;
};
export default reorderTasks;
