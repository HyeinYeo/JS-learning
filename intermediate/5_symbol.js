/** Symbol
 *  - 객체의 속성 키(property key)는 문자열!
 * 
 *  1. Symbol
 *      - 유일한 식별자를 만들 때 사용
 *      - Symbol() 함수로 생성
 *      - ===(일치 연산자)로 비교해도 false
 * 
 *      - Object.keys(), Object.values(), Object.entries(), for...in으로 접근 불가(건너 뜀)
 *      - description : Symbol의 key를 가져옴 (전역심볼 제외)
 * 
 *  2. Symbol.for() : 전역 심볼
 *      - 하나의 심볼만 보장받을 수 있음
 *      - 없으면 만들고 있으면 가져옴
 *      - Symbol 함수는 매번 다른 Symbol을 생성하지만 Symbol.for은 하나의 Symbol만 생성 -> 키를 통해 같은 Symbol을 공유
 *      - Symbol.keyFor() : 전역 Symbol의 키를 가져옴 (전역심볼 아니면 사용 불가능)
 * 
 *  3. 숨겨진 Symbol 키 보는 법
 *      - Object.getOwnPropertySymbols() : Symbol 키를 배열로 반환
 *      - Reflect.ownKeys() : Symbol 키를 포함한 모든 키를 배열로 반환
 */

// 1. Symbol 생성
const id = Symbol();
const id2 = Symbol();
console.log(id === id2); // false

// 2. Symbol에 설명 추가
const id3 = Symbol('id3'); // 설명이 똑같아도 다른 Symbol
const id4 = Symbol('id3');
console.log(id3 === id4); // false

// 3. Symbol은 객체의 key로 사용 가능
const id5 = Symbol('id5');
const user = {
    name: 'John',
    [id5]: 30 // Computed Property Names
};
console.log(user); // { name: 'John', [Symbol(id5)]: 30 }
console.log(user[id5]); // 30

// 4. Symbol 프로퍼티 건너 뜀
Object.keys(user); // [ 'name' ]만 나옴

// 5. Symbol.for() : 전역 심볼
const id6 = Symbol.for('id6');
const id7 = Symbol.for('id6');
console.log(id6 === id7); // true

// 6. description vs. Symbol.keyFor()
console.log(id5.description); // id5 -> 설명을 가져옴
console.log(Symbol.keyFor(id5)); // undefined -> 전역 Symbol이 아니기 때문에 사용 불가능

Symbol.keyFor(id6); // id6 -> Symbol.for()로 만든 Symbol의 키를 가져옴
console.log(id6.description); // id6 -> Symbol.for()로 만든 Symbol은 undefined

// 7. 숨겨진 Symbol 키 보는 법
const id8 = Symbol('id8');
const user2 = {
    name: 'John',
    [id8]: 30
}
console.log(Object.getOwnPropertySymbols(user2)); // [ Symbol(id8) ] -> Symbol 키를 배열로 반환
console.log(Reflect.ownKeys(user2)); // [ 'name', Symbol(id8) ] -> Symbol 키를 포함한 모든 키를 배열로 반환


// ------------------------

// 실용적 예제: 남이 만들어 둔 객체에 안전하게 프로퍼티 추가
// 다른 개발자가 만들어 놓은 객체
const person = {
    name: 'John',
    age: 30,
};

// 내가 작업
// user.showName = function() { console.log(this.name); }; // 이렇게 하면 다른 개발자가 만든 객체를 수정하는 것
const showName = Symbol('showName');
person[showName] = function() {
    console.log(this.name);
};
person[showName](); // John
console.log(person); // { name: 'John', age: 30, [Symbol(showName)]: [Function (anonymous)] } 
                    // -> 다른 개발자가 만든 객체를 수정하지 않고 프로퍼티 추가 가능


// 사용자가 접속하면 보는 메시지
for (let key in person) {
    console.log(`his ${key} is ${person[key]}.`); // name, age만 나옴
}