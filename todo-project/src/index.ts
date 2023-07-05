import TodoItems from './TodoItems';

// 테스트를 위한 임의의 데이터
const data = [
  { id: 1, task: "장보기", complete: true },
  { id: 2, task: "TS 공부하기", complete: false },
];

console.log('My Todo List');

for(let i = 0; i < data.length; i++) {
  let todoItem = new TodoItems(data[i].id, data[i].task, data[i].complete);
  todoItem.printDetails();
}