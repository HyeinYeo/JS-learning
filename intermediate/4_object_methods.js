/** Object Methods
 *   - 객체에 사용할 수 있는 메소드들
 *   
 *   - Object.assign(target, ...sources) : target 객체에 sources 객체들을 깊은 복사, 여러 개 복사 가능
 *   - Object.keys(obj) : 객체의 key들을 배열로 반환
 *   - Object.values(obj) : 객체의 value들을 배열로 반환
 *   - Object.entries(obj) : 객체의 key, value를 배열로 반환
 *   - Object.fromEntries(array) : 배열을 객체로 변환
 */

// 1. Object.assign(target, ...sources)
const user = { name: 'John' }; // user는 레퍼런스 변수 같은 것
const cloneUser = user; // 얕은 복사
const newUser = Object.assign({}, user); // 깊은 복사: {}는 빈 객체를 의미

const info1 = { age: 30 };
const info2 = { gender : 'male'};
Object.assign(user, info1, info2); // user에 info1, info2를 복사
console.log(user); // { name: 'John', age: 30, gender : 'male' }


// 2. Object.keys(obj)
const user2 = { name: 'John', age: 30 };    
const keys = Object.keys(user2);
console.log(keys); // [ 'name', 'age' ]

// 3. Object.values(obj)
const values = Object.values(user2);
console.log(values); // [ 'John', 30 ]

// 4. Object.entries(obj)
const entries = Object.entries(user2);
console.log(entries); // [ [ 'name', 'John' ], [ 'age', 30 ] ] -> 배열 안에 배열

// 5. Object.fromEntries(array)
const arr = [
    ['name', 'John'],
    ['age', 30]
];
const obj = Object.fromEntries(arr);
console.log(obj); // { name: 'John', age: 30 } -> 배열을 객체로 변환