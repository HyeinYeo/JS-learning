/** Method in Object, this keyword
 * 1. Method
 *   - 객체에 속한 함수
 *   - 객체명.함수명()으로 호출
 * 
 * 2. this
 *   - 객체 내부에서 객체 자신을 가리킴
 *   - 화살표 함수는 자신만의 this를 가지지 않음 -> 화살표 함수 내부에서 this 사용 시, 외부 함수의 this를 사용
 *      => 화살표 함수는 객체의 메서드로 사용하지 않는 것이 좋음
 */

// Method, this
const superman = {
    name: "Clark",
    age: 33,
    fly : function() { // : function 생략 가능
        console.log(`${this.name} is flying!`);
    }
}
superman.fly(); // Clark is flying!


// this
// 일반적인 함수에서 this는 함수를 호출한 객체를 가리킴
let boy = {
    name: 'Mike',
    sayHello : function() {
        console.log(`Hello, ${this.name}`);
    }
}
boy.sayHello(); // Hello, Mike

// method가 화살표 함수
let girl = {
    name: 'Jane',
    sayHello : () => {
        console.log(`Hello, ${this.name}`); // 여기서의 this는 전역객체(window, global)를 가리킴
    }
}
girl.sayHello(); // Hello, undefined

