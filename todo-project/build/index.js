"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItems_1 = __importDefault(require("./TodoItems"));
// 테스트를 위한 임의의 데이터
const data = [
    { id: 1, task: "장보기", complete: true },
    { id: 2, task: "TS 공부하기", complete: false },
];
console.log('My Todo List');
for (let i = 0; i < data.length; i++) {
    let todoItem = new TodoItems_1.default(data[i].id, data[i].task, data[i].complete);
    todoItem.printDetails();
}