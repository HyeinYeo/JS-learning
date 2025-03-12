/** 생성자
 * - 대문자로
 * - new 연산자와 함께 호출
 *   - new 안 붙이면 undefined 반환
 * 
 */

// let user = {
//     name: 'John',
//     age: 30
// };

// 1. 생성자 기본
function User(name, age) {
    // this = {}; -> 암시적으로 생성
    this.name = name;
    this.age = age;
    // return this; -> 암시적으로 반환
}

let user1 = new User('John', 30);
let user2 = new User('Jane', 22);

// 2. 생성자 내 메서드 추가
function User2(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function() {
        console.log(`Hello, ${this.name}`);
    };
}
let user3 = new User2('John', 30);
user3.sayHi();