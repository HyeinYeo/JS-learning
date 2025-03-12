/** call, apply, bind
 *  함수 호출 방식과 관계 없이 this 지정 가능
 */

// 1. call : 매개변수를 직접 받음
const mike = {
    name: "Mike",
};
const tom = {
    name: "Tom",
};
function showThisName(){
    console.log(this.name); 
}
showThisName(); // this는 전역(window)을 가리킴 -> undefined
showThisName.call(mike); // this는 mike

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
};
update.call(mike, 1999, "singer");
console.log(mike); // { name: 'Mike', birthYear: 1999, occupation: 'singer' }

// 2. apply : 매개변수를 배열로 받음
update.apply(tom, [1999, "singer"]);
console.log(tom); // { name: 'Tom', birthYear: 1999, occupation: 'singer' }

// 3. bind : 함수의 this값을 영구히 바꿀 수 있음
const updateMike = update.bind(mike); // updateMike는 항상 mike를 this로 받음
updateMike(1980, "police");
console.log(mike); // { name: 'Mike', birthYear: 1980, occupation: 'police' }