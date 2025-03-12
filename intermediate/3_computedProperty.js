/**  Computed Property Names: 계산된 프로퍼티 이름
 *   - 객체의 key값을 표현식(변수, 함수 등)을 통해 지정하는 문법
 *   - 어떤 것이 key가 될지 모르는 객체 만들 때 사용
 *   - 객체 리터럴 안에 대괄호를 사용하여 key를 지정 []
 */

let a = 'age';
function func() {
    return 'hello';
}

// Computed Property Names
const user = {
    name: 'John',
    [a]: 30, // age: 30 과 같음
    [1 + 4] : 5, // 5: 5와 같음
    ["안녕" + "하세요"] : "Hello", // 안녕하세요: "Hello"와 같음
    [func()] : 'Hi', // 함수도 됨 -> hello: 'Hi'와 같음
};

console.log(user); // { name: 'John', age: 30, '5': 5, '안녕하세요': 'Hello', hello: 'Hi' }


// 실용적 예제
function makeObj(key, val) {
    return {
        [key]: val
    };
}
const obj = makeObj('나이', 30);
console.log(obj); // { 나이: 30 } -> key값을 변수로 받아서 객체 생성 가능