/** 상속과 프로토타입
 * 1. 프로토로 중첩 상속하면 프로토 체인 생성!
 * 2. 상속 받은 프로퍼티
 *      - for문으로 조회하면 나옴
 *      - keys(), values()로는 상속 받은 프로퍼티는 안 나옴
 *          => hasOwnProperty() 사용하면 됨
 * 3. 생성자와 함께 사용
 *  - 생성자 함수명.prototype.~으로 프로토 지정
 * 
 * 4. instanceof
 * 
 * 5. getter
 */

// 상속
const car = {
    wheels: 4,
    drive(){
        console.log("drive...");
    },
};

const bmw = {
    color: "red",
    navigation: 1,
};
const benz = {
    color: "black"
};
const audi = {
    color: "blue"
};

bmw.__proto__ = car; // car 상속 -> bmw.wheels 하면 4 출력
benz.__proto__ = car;
audi.__proto__ = car;

// 생성자와 함께 프로토타입 사용하기
const Bmw = function (color){
    this.color = color;
};
Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function(){
    console.log("drive...");
}

const x5 = new Bmw("red");
const z4 = new Bmw("blue");

// x5.__proto__ = car; 
// z4.__proto__ = car;


// 4. instanceof
console.log(z4 instanceof Bmw); // true
console.log(z4.constructor === Bmw); // true

// 5. getter -> 클로저 이용
const Audi = function(color){
    const c = color;
    this.getColor = function(){
        console.log(c);
    };
};
const x6 = new Audi("blue");
x6.getColor(); // blue -> 초기 설정한 색 얻을 수만 있음(수정 불가)