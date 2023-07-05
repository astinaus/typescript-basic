import TodoItems from './TodoItems';

// 테스트를 위한 임의의 데이터
const data = [
  { id: 1, task: "장보기", complete: true },
  { id: 2, task: "TS 공부하기", complete: false },
];
// 선언문과 실행문이 동시에 작성되었기 때문에 타입 추론이 적용되었다.

console.log('My Todo List');

for(let i = 0; i < data.length; i++) {
  let todoItem = new TodoItems(data[i].id, data[i].task, data[i].complete);
  todoItem.printDetails();
}