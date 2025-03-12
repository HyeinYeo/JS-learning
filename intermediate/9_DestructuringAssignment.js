/** 구조 분해 할당
 * - unpacking 같은 기능
 * - 해당하는 값이 없으면 undefined 또는 기본 값
 * - 건너뛰기도 가능
 * - 객체 구조분해도 가능(순서 신경 X)
 */

let users = ["M", "T", "J"];
let [user1, user2, user3] = users;
console.log(user1, user2, user3); // M T J

let user = {name: "M", age: 30};
let {age, name, gender = 'male'} = user;
console.log(name, age, gender);  