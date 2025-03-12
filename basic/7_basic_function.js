/** Function
 *  - 선언: function 키워드 사용
 *  - 호출: 함수명()
 *  - 지역변수, 전역변수
 * 
 *  - 매개변수에 인수 전달 안 하면 undefined
 *  - 매개변수 기본값
 * 
 *  - return
 *     - return 뒤에 값이 없으면 undefined 반환
 *     - return이 없으면 undefined 반환
 */

// 1. 함수 선언
function showAlert() {
    alert("Hello!");
}
showAlert();

function greet(name) {
    console.log("Hello!" + name);
}
greet("Mike");

function sayHello(name) { // 매개변수 있는지 없는지에 따라 출력 변화
    let msg = `Hello`;
    if (name){
        msg += `, ${name}`;
    }
    console.log(msg);
}
sayHello();
sayHello("Mike");

// 2. 매개변수 기본값
function sayHello2(name = "FRIEND") { // name이 없을 때만 할당
    let msg = `Hello, ${name}`;
    console.log(msg);
}
sayHello2();

// 3. return
function add(a, b) {
    return a + b;
}
const result = add(1, 2);
console.log(result);