/** Arrow Function
 * 1. 함수 선언문 vs. 함수 표현식
 *    - 함수 선언문: 어디서든 호출 가능(호이스팅)
 *    - 함수 표현식: 코드에 도달하면 생성 (js는 인터프리터 언어)
 * 
 * 2. 화살표 함수
 *    - 함수 표현식에서 function 키워드 삭제, 매개변수 괄호 다음에 => 사용
 *    - 함수 몸체가 한 줄이면 중괄호 생략 가능
 *    - 매개변수가 하나면 소괄호 생략 가능
 *    - 매개변수가 없으면 소괄호 필수
 *    - 화살표 함수는 익명 함수로만 사용 가능
 */


// 함수 선언문
sayHello1(); // 호이스팅
function sayHello1(){
    console.log("Hello!");
}

// 함수 표현식
let sayHello2 = function(){
    console.log("Hello!");
}
sayHello2();

// 화살표 함수
// 1) 함수 몸체가 한 줄인 경우, 중괄호 생략 가능
let add1 = (a, b) => a + b; // 리턴문까지 한 줄이라면 return도 생략 가능
let add2 = (a, b) => (a + b); // return이 있는 경우 소괄호로 감싸기 가능

// 2) 매개변수가 하나인 경우, 매개변수 소괄호 생략 가능
let greet = name => console.log(`Hello, ${name}`);

// 3) 매개변수가 없는 경우, 소괄호 필수
let doNothing = () => console.log("Nothing");

