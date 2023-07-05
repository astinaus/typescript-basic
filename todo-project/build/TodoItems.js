"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoItems {
    // 생성자 함수의 파라미터에 접근 지정자를 직접 대입하면 프로퍼티로 인식되고, 코드의 중복을 줄일 수 있다.
    constructor(id, task, complete) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task}\t${this.complete ? 'complete' : ''}`);
    }
}
exports.default = TodoItems;
// JS버전 TodoItem 클래스
// TS버전과 비교해보기
// class TodoItems {
//   constructor(id, task, complete) {
//     this.id = id;
//     this.task = task;
//     this.complete = complete;
//   }
//   printDetails() {
//     console.log(`${this.id}\t${this.task}\t${this.complete ? "\t(complete)" : ""}`);
//   }
// }
