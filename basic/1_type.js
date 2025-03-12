/** 자료형
 *  - 문자형(String): "Hello", 'Hello'
*   - 숫자형(Number): 3, 3.14
*   - 불린형(Boolean): true, false
*   - null: 값이 없음
*   - undefined: 값이 할당되지 않음

*   - 문자열 연결: +, ``(백틱)
*   - Infinity: 무한대
*   - NaN: 숫자가 아님
*   - typeof: 자료형 확인
 */

const name = "Mike"; // 문자형
const age = 30; // 숫자형

const msg = "Hello, " + name; // 문자열 연결
const message = `My name is ${name}`; // 백틱
console.log(message);

console.log(1 / 0); // Infinity
console.log(name / 3); // NaN (Not a Number) -> 숫자 다룰 때 꼭 확인할 것
console.log(name == "Mike"); // true
console.log(typeof 3); // 자료형 알아보기