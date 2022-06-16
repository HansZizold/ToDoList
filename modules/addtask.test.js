import addTask from './addtask.js';

jest.mock('./addtask.js');

// arrange
let taskArray = [
  {
    description: 'Test 1',
    completed: false,
    index: 1,
  },
];
localStorage.setItem('mytests', JSON.stringify(taskArray));
const taskDescription = 'Test 2';

// act
const tasksBefore = taskArray.length;
taskArray = addTask(taskDescription);
const tasksAfter = taskArray.length;

// assert
describe('Adding Operation', () => {
  test('check if just one task was added', () => {
    expect(tasksAfter - tasksBefore).toBe(1);
  });

  test('check if tasks before were 1', () => {
    expect(tasksBefore).toBe(1);
  });

  test('check if tasks after test is 2', () => {
    expect(tasksAfter).toBe(2);
  });
});
