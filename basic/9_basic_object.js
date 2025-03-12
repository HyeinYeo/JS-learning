/** 객체
 * - 파이썬 딕셔너리 같은 형태
 * - 접근
 *     - .(dot) 연산자
 *     - 대괄호([]) 연산자
 * - 추가
 *    - 객체.프로퍼티 = 값;
 *    - 객체['프로퍼티'] = 값;
 * - 삭제
 *   - delete 객체.프로퍼티;
 *   - delete 객체['프로퍼티'];
 * 
 * - 단축 프로퍼티
 *  - 프로퍼티 이름과 값이 같을 때, 프로퍼티 이름 생략 가능
 *  - {name: name} -> {name}
 * 
 * - 프로퍼티 존재 여부 확인(in 연산자)
 *  - 존재하지 않는 프로퍼티에 접근하면 undefined 반환
 *  - in 연산자 
 *      - 어떤 값이 넘어올지 확신할 수 없을 때 사용: '프로퍼티' in 객체
 *      - for in 반복문과 함께 사용
 * 
 * - 객체 반환 함수
 */

// 객체 생성
const superman = {
    name: 'clark',
    age: 33,
}

// 접근
superman.name
superman['age']

// 추가
superman.gender = 'male';
superman['hairColor'] = 'black';

// 삭제
delete superman.hairColor;

// 단축 프로퍼티
let name = 'clark';
let age = 33;

const batman = {
    name, // name: name,
    age, // age: age
    gender : 'male',
}

// in 연산자
console.log('name' in superman); // true
console.log('money' in superman); // false

// for in 반복문
for (key in superman) {
    console.log(key); // key 출력
    console.log(superman[key]); // value 출력
}

// 객체 반환 함수
function makeObject(name, age) {
    return {
        name : name, // name, (축약 가능)
        age: age,   // age, (축약 가능)
        hobby: 'football',
    }
}

const mike = makeObject('mike', 30);
console.log(mike); // {name: "mike", age: 30, hobby: "football"} 출력

