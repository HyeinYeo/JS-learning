/** reset parameter, spread syntax
 * 1. arguments
 *  - 함수로 넘어 온 모든 인수에 접근
 *  - 함수 내에서 이용 가눙한 지역변수
 *  - length, index를 가짐
 *  - array 형태의 객체 그러나 배열 내장 메서드 없음
 * 
 * 2. 나머지 매개변수(reset parameter) => 권장!
 *  - 항상 마지막에 위치할 것
 * 
 * 3. 전개 구문
 *  - 객체, 배열들을 중간에 넣을 수 있음(풀어줌)
 */

// 1. arguments
function showName(name){
    console.log(arguments.length); // 2
    console.log(arguments[0]); // 'Mike'
    console.log(arguments[1]); // 'Tom'
}
showName('Mike', 'Tom');

// 2. 나머지 매개변수
function add(...numbers){
    let result = 0;
    numbers.forEach(num => (result += num));
    console.log(result);
}

add(1, 2, 3); // 6

// 3. 전개구문
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = [0, ...arr1, ...arr2, 7, 8];
console.log(result); // [0, 1, 2, 3, 4, 5, 6, 7, 8]