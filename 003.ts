// 함수의 종류(선언적 함수, 익명 함수, 람다 함수)에 따라 타입 지정에 대한 표현에는 차이가 있다.
// 선언적 함수
function add(x: number, y: number): number {
  return x + y;
}

// 익명 함수
const add2 = function (x: number, y: number): number {
  return x + y;
}

// 람다 함수
const add3:(x: number, y: number) => number = (x: number, y: number): number => {
  return x + y;
}

// JS에서는 가변인자를 통해 함수 호출이 가능했지만, TS에서는 가변인자를 지원하지 않는다.
// 대신 함수 오버로딩 이라는 방식을 통해 가변인자를 대체할 수 있다.
// 함수 오버로딩은 함수의 이름은 동일하지만, 파라미터의 타입과 개수를 다르게 지정하는 방식이다.

// 함수 오버로딩
function add4(x: number, y: number): number;
function add4(x: string, y: string): string;
// body가 없는 추상 메소드 형태의 함수 정의

// any 타입을 받는 함수 정의
function add4(x: any, y: any): any {
  console.log(x + y);
}

// 함수 오버로딩 사용
add4(1, 2); // 3
add4('hello', 'world'); // helloworld

// 핵심은 타입스크립트에서 가변인자가 지원되지 않는다는 것이다.
