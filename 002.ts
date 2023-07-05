// 타입 추론 Type Inference
// 정적으로 타입을 명시하지 않고, 대입하는 값을 통해서 변수의 타입을 유추해 결정하는 것
// 타입 추론은 변수의 선언과 함께 값을 대입할 때, 즉 선언문과 실행문을 함께 사용할 때 적용된다.
let age = 20; // age 변수는 number 타입으로 추론된다.
let city = 'Busan' // city 변수는 string 타입으로 추론된다.
// let age : number;
// let city : string;

// 변수를 선언과 값의 대입을 다른 코드 라인에서 진행하는 경우 해당 변수의 타입은 any 타입의 변수가 된다.
// any 타입은 자바스크립트처럼 어떠한 데이터 타입의 값도 대입할 수 있다.
let grade; // grade 변수는 any 타입으로 추론된다.
grade = 100;

let job; // job 변수는 any 타입으로 추론된다.
job = 'developer';

// any 타입으로 직접 지정도 가능하다.
let time: any;