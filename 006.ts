// Generic
// 제네릭이란 재사용 가능한 함수, 클래스를 만들기 위해 다양한 타입을 사용 가능하도록 하는 것이다.
// 제네릭을 이용하면 모든 타입의 객체를 다루면서 객체의 무결성을 유지할 수 있다.
// 제네릭이 적용된 함수, 클래스, 인터페이스는 선언 시점이 아닌 생성 시점에 사용되는 타입이 결정된다.
// 제네릭이 적용된 대상은 인스턴스화 될 때 지정된 데이터 타입으로 모든 파라미터가 지정이 된다.

class Box<T> { // <T> => Generic, T는 타입 파라미터를 뜻한다.
  constructor(private fruit: T) {}
  getFruit(): T {
    return this.fruit
  }
}

// 타입 파라미터는 상속을 통해 특정 타입의 하위 타입으로 제한할 수 있다.
// class Box<? extends Fruit>

/* =================== */

// 새로운 타입을 정의하는 방법
// 1. type alias
type MyNumber = number;
let myNum : MyNumber = 10;

type Container<T> = { value : T } // Generic

type User = {name: string, age: number};
const testUser : User = {name: 'Han', age: 26}

// 2. interface
