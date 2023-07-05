// 간단한 타입스크립트 예시
function add(n1: number, n2: number) {
  return n1 + n2;
}

console.log(add(1, 2));

// 원시타입
let num: number = 1;
let str: string = "hello";
let bool: boolean = true;
let symbol: symbol = Symbol();
// undefined;
// null;
// void;

// 객체타입
let obj: object = {};
let arr: Array<number> = [1, 2, 3];
let arr2: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];
let func: Function = () => {};
class Person {};

// 타입스크립트는 정적 타입을 지원하기 때문에 변수, 파라미터, 함수의 반환값에 데이터의 타입을 지정할 수 있다.
// 타입이 지정되면 해당 변수, 파라미터, 함수의 반환값에는 지정된 타입의 값만 대입할 수 있으며, 만약 지정된 타입이 아닌 값을 대입하게 되면 컴파일 과정에서 에러가 발생한다.
// 타입을 지정할 때에는 변수명 뒤에 콜론(:)을 붙이고 그 뒤에 타입을 적어주면 된다.

let year: number = 2023; // number 타입의 값만 대입할 수 있다.
function sum(a: number, b: number): number {
  return a + b; // number 타입의 값만 반환할 수 있다.
}
