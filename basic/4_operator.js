/** Operator
 * 1. 산술 연산자
 *  - 우선순위
 *  - 복합연산자 : +=, -=, *=, /=, %=
 *  - 증감연산자 : ++, -- (전위, 후위 주의!)
 * 
 * 2. 비교 연산자 
 *  - 동등/일치 연산자 : ==, ===(타입까지 비교)
 *  - 부등 연산자 : !=, !==
 *  - 대소 관계 연산자 : >, <, >=, <=
 * 
 * 3. 조건문
 *  - if, else if, else
 *  - 조건식은 불린형으로 평가
 * 
 * 4. 논리 연산자
 *  - ||(or), &&(and), !(not)
 *  - 단락 평가 : 앞이 true면 뒤는 평가하지 않음
 *    - true || false -> true
 *    - false && true -> false
 *  - 우선순위 : NOT > AND > OR
 */ 

// 산술 연산자
let num = 10;
num += 5; // num = num + 5
console.log(num); // 15


// 비교 연산자와 조건문
console.log(10 > 5); // true

// 동등 연산자
const a = 1;
const b = "1";
console.log(a == b); // true : 값만 비교
console.log(a === b); // false : 값과 타입 비교 -> 일치 연산자 사용 권장

// 조건문
const age = 20;
if (age > 19) {
    console.log("성인입니다.");
} else if (age === 19) { // 일치 연산자!
    console.log("고3입니다.");
}else {
    console.log("미성년자입니다.");
}

// 논리 연산자
// OR : 이름이 TOM이거나 성인이면 통과
const name = "Mike";
const age2 = 23;

if (name === "TOM" || age2 > 19) {
    console.log("통과");
}

// AND : 이름이 Mike이고 성인이면 통과
if (name === "Mike" && age2 > 19) {
    console.log("통과");
} else{
    console.log("불합격");
}

// NOT : 성인이 아니면 불합격
const age3 = prompt("나이를 입력하세요.");
const isAdult = age3 > 19;
if (!isAdult) {
    console.log("불합격");
}