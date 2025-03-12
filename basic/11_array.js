/** Array
 * - 0~n-1까지 인덱스를 가지는 요소들의 집합
 * - 배열 요소는 모든 자료형 가능(문자형, 숫자형, 객체, 배열, 함수 등)
 * - length: 배열 길이
 * - 요소 추가/삭제/변경 가능
 *   - 추가: push, unshift
 *   - 삭제: pop, shift
 *   - 변경: 인덱스 + =
 * 
 * - for - of
 *   - 배열 요소를 순회
 *   - 인덱스를 못 얻는다는 단점
 */

// 배열 생성
let students = ["Mike", "Tom", "Jane"]; 

// 배열 요소 자료형
let arr = [
    "Mike", // 문자형
    { name: "Tom" }, // 객체
    true, // 불린형
    function() { // 함수
        console.log("Hello!");
    }
];

// 배열 길이
console.log(students.length); // 3

// 추가
students.push("Anne"); // 배열 끝에 추가
students.unshift("Irene"); // 배열 앞에 추가

// 삭제
students.pop(); // 배열 끝 요소 삭제
students.shift(); // 배열 앞 요소 삭제

// 변경
students[0] = "Sarah"; // 배열 요소 변경

// for
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// for - of
for (let student of students) {
    console.log(student);
}