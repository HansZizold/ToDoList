import updateTask from './updatetask.js';

jest.mock('./updatetask.js');

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
const task2descriptionBefore = taskArray[1].description;
updateTask('New Task 2');
taskArray = JSON.parse(localStorage.getItem('mytests'));
const task2descriptionAfter = taskArray[1].description;

// assert
describe('Editing Operation', () => {
  test('check if descriptions before and after are different', () => {
    expect(task2descriptionBefore).toBe('Task 2');
  });
  test('check if descriptions before and after are different', () => {
    expect(task2descriptionAfter).toBe('New Task 2');
  });
});
