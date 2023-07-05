// 함수의 타입지정
// 함수의 파라미터를 정의할 때 각 파라미터의 타입을 지정하지 않으면 any 타입의 파라미터가 지정된다.
// 함수의 반환값에 대한 타입은 return 실행문에 의한 타입 추론이 적용된다.
const findArea = function (width: number, height: number): number {
  return width * height
}

// const findArea = (width: number, height: number): number => {
//   return width * height
// }

// const findArea = (width: number, height: number) {
// return width * height
// }

console.log(findArea(10, 10)); // 100

// 함수의 반환값이 존재하지 않는 경우 void 타입의 반환을 정의한다.
// 함수의 반환값으로 정의 가능한 never 타입은 절대 발생하지 않는 값의 타입을 의미한다.
// void 타입은 변수로 사용될 경우 undefined || null 타입의 값만 할당할 수 있다.
// never 타입은 어떤 타입의 변수에도 대입될 수 있지만, never 타입에는 어떤 타입의 값도 대입될 수 없다.
let accountBalance: number = 10000;

function overdraftError(message?: string): never {
  throw new Error(message);
}

function withdraw(balance: number): number {
  if (accountBalance < balance) {
    overdraftError('잔액이 부족합니다.');
  }
  return accountBalance - balance;
}

console.log(withdraw(3000)); // 7000
console.log(withdraw(13000)); // Error: 잔액이 부족합니다.