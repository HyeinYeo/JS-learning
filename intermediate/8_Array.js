/** Array methods
 *  1. splice(start, deleteCount, item1, item2, ...) : 특정 요소 삭제/추가
 *      - 삭제된 요소 반환
 * 
 *  2. slice(start, end) : start부터 end까지 반환
 *      - end 안 쓰면 배열 끝까지
 *      - 인수 안 넣으면 복사 됨
 * 
 *  3. concat()
 *      - 합쳐서 새 배열 반환
 *  
 *  4. forEach(함수) : 배열 반복
 * 
 *  5. indexOf, lastIndexOf
 *      - indexOf(3) : 숫자 3의 인덱스
 *      - indexOf(3, 3) : 인덱스 3부터 시작해서 최초로 발견된 숫자 3의 인덱스
 * 
 *  6. includes() : 포한하는지 확인
 * 
 *  7. find(함수), findIndex(함수)
 *      - 첫 번째 true 값만 반환하고 끝
 *      - 만약 없으면 undefined 반환
 * 
 *  8. filter(함수)
 *      - 조건 만족하는 모든 요소를 배열로 반환
 * 
 *  9. reverse() 
 * 
 *  10. map(함수) : 함수를 받아 특정 기능 수행 후, 새로운 배열 반환
 * 
 *  11. join, split
 *      - join(): 인수로 전달된 구분자 기준으로 배열 요소 합치기
 *      - split(): 인수로 전달된 구분자 기준으로 배열 요소로 나눔
 * 
 *  12. Array.isArray() : 배열인지 확인
 *      - typeof는 객체든 배열이든 object 나옴
 * 
 *  13. sort() : 배열 정렬(배열 자체가 변경)
 *      - 정렬 로직을 담은 함수를 인수로 전달
 *      => Lodash 라이브러리 사용 : _.sortBy(arr);
 * 
 *  14. reduce() 
 *      - 인수로 함수를 받음
 *      - (누적계산값, 현재값) => {return 계산값};
 */

// 1. splice()
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2); // 1번 인덱스부터 2개 삭제
console.log(arr); // [ 1, 4, 5 ]

arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 6, 7); // 1번 인덱스부터 2개 삭제 후 6, 7 추가
console.log(arr); // [ 1, 6, 7, 4, 5 ]

arr = ["나는", "철수", "입니다"];
arr.splice(1, 0, "대한민국", "소방관"); // 아무것도 지우지 않고 인덱스 1부터 추가 -> 나는 대한민국 소방관 철수 입니다



// 4. forEach
let users = ["Mike", "Tom", "Jane"];
users.forEach((name, index, arr) => {
    console.log(index + name);
});


// 7. find()
arr = [1, 2, 3, 4, 5];
const result = arr.find((item) => {
    return item % 2 == 0; // 가장 처음에 있는 짝수 찾아내기
});
console.log(result); // 2 반환

// 10. map
let userList = [
    {name: "Mike", age: 30},
    {name: "Jane", age: 27},
    {name: "Tom", age: 10},
];

let newUserList = userList.map((user, index) =>{
    return Object.assign({}, user, {
        id: index + 1,
        isAdult: user.age > 19,
    });
});

console.log(newUserList);
/* [
  { name: 'Mike', age: 30, id: 1, isAdult: true },
  { name: 'Jane', age: 27, id: 2, isAdult: true },
  { name: 'Tom', age: 10, id: 3, isAdult: false }
] */


// 13. sort()

let arr2 = [27, 8, 5, 13];
arr2.sort((a, b) => {
    return a - b; // 양수면 b가 앞으로 감
});
console.log(arr2);

// 14. 배열의 모든 수 합치기
let arr3 = [1, 2, 3, 4, 5];
const result3 = arr.reduce((prev, curr) => {
    return prev + curr;
}, 0);
console.log(result3); // 15