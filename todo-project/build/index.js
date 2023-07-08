"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoCollection_1 = __importDefault(require("./TodoCollection"));
const TodoItem_1 = __importDefault(require("./TodoItem"));
const data_1 = require("./data");
const sampleTodos = data_1.data.map((item) => new TodoItem_1.default(item.id, item.task, item.complete));
const myTodoCollection = new TodoCollection_1.default('My Todo List', sampleTodos);
myTodoCollection.addTodo('JS 공부하기');
myTodoCollection.addTodo('운동하기');
myTodoCollection.markComplete(3, true);
myTodoCollection.removeComplete();
console.log(`${myTodoCollection.userName}`);
myTodoCollection.getTodoItems(true).forEach(item => item.printDetails());
console.log('=========================');
myTodoCollection.getTodoItems(false).forEach(item => item.printDetails());
