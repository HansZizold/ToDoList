const getLocalStorage = () => {
  JSON.parse(localStorage.getItem("myTasks")) || [];
};

export default getLocalStorage;
