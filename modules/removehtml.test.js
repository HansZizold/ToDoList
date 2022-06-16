import removehtml from './removehtml.js';

jest.mock('./removehtml.js');

// arrange
let taskArray = [
  {
    description: 'Test 1',
    completed: false,
    index: 1,
  },
  {
    description: 'Test 2',
    completed: false,
    index: 2,
  },
  {
    description: 'Test 3',
    completed: false,
    index: 3,
  },
];
localStorage.setItem('mytests', JSON.stringify(taskArray));

// act
const tasksBefore = taskArray.length;
removehtml(taskArray[0]);
taskArray = JSON.parse(localStorage.getItem('mytests'));
const tasksAfter = taskArray.length;

// assert
describe('Removing Operation', () => {
  test('check if just one task was removed', () => {
    expect(tasksBefore - tasksAfter).toBe(1);
  });
  test('check the quantity of tasks before removing', () => {
    expect(tasksBefore).toBe(3);
  });
  test('check the quantity of tasks after removing', () => {
    expect(tasksAfter).toBe(2);
  });
  test('check if the first index is 1', () => {
    expect(taskArray[0].index).toBe(1);
  });
  test('check if the second index is 2', () => {
    expect(taskArray[1].index).toBe(2);
  });
  test('check if the final length of the array is 2', () => {
    expect(taskArray.length).toBe(2);
  });
});
