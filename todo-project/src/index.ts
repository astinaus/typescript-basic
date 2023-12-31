import TodoCollection from './TodoCollection';
import TodoItem from './TodoItem';
import { data } from './data';

const sampleTodos: TodoItem [] = data.map((item) => new TodoItem(item.id, item.task, item.complete));

const myTodoCollection = new TodoCollection('My Todo List', sampleTodos);

myTodoCollection.addTodo('JS 공부하기');
myTodoCollection.addTodo('운동하기');

myTodoCollection.markComplete(3, true);

myTodoCollection.removeComplete();

console.log(`${myTodoCollection.userName}`);
myTodoCollection.getTodoItems(true).forEach(item => item.printDetails());
console.log('=========================')
myTodoCollection.getTodoItems(false).forEach(item => item.printDetails());



