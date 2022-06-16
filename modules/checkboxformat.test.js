import checkboxFormat from './checkboxformat.js';

jest.mock('./checkboxformat.js');

// arrange
let taskArray = [
  {
    description: 'Task 1',
    completed: false,
    index: 1,
  },
  {
    description: 'Task 2',
    completed: false,
    index: 2,
  },
  {
    description: 'Task 3',
    completed: false,
    index: 3,
  },
];
localStorage.setItem('mytests', JSON.stringify(taskArray));

// act
const task1completedBefore = taskArray[0].completed;
const task3completedBefore = taskArray[2].completed;
checkboxFormat(1);
checkboxFormat(3);
taskArray = JSON.parse(localStorage.getItem('mytests'));
const task1completedAfter = taskArray[0].completed;
const task3completedAfter = taskArray[2].completed;

// assert
describe('Updating Task State Operation', () => {
  test('status of task 1 is false (uncompleted) before checkbox', () => {
    expect(task1completedBefore).toBe(false);
  });
  test('status of task 1 is false (uncompleted) before checkbox', () => {
    expect(task3completedBefore).toBe(false);
  });
  test('status of task 3 is true (completed) after checkbox', () => {
    expect(task1completedAfter).toBe(true);
  });
  test('status of task 3 is false (completed) after checkbox', () => {
    expect(task3completedAfter).toBe(true);
  });
});
