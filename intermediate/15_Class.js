/** 클래스
 * 1. 객체와의 차이점
 * - new 없으면 에러 발생
 *     - 일반 객체는 new 없이도 생성 가능했고 undefined
 * - 클래스의 메서드는 for~in문 검색 시 제외됨
 * 
 * 2. 상속 -> extends
 * 
 * 3. 오버라이딩
 *   - 메서드
 *   - 생성자 : 자식 클래스 생성자를 만들면 꼭 super() 먼저 해줘야 함(단, 자식 클래스 생성자 아예 없으면 묵시적으로 삽입됨)
 * 
 */
class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){ // User의 '프로토타입'에 추가됨
        console.log(this.name);
    }
}
const tom = new User("Tom", 19);
tom.showName();

// 2. 상속
class Car{
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    drive(){
        console.log("drive...");
    }
    stop() {
        console.log("STOP!");
    }
}

class Bmw extends Car{
    constructor(color){
        super(color); // 필수!!
        this.navigation = 1; // 생성자 오버라이딩
    }
    park(){
        console.log("PARK");
    }
    stop(){ // 오버라이딩
        super.stop(); // 부모 클래스의 메서드 실행 -> STOP!
        console.log("OFF");
    }
}
const z4 = new Bmw("blue"); // z4 찍어보면 프로토타입에 park 있고, 또 다시 중첩 프로토타입에 drive, stop 있음

// 3. 오버라이딩
// - 메서드 오버라이딩
z4.stop(); // STOP! OFF -> 오버라이딩된 메서드 실행


// - 생성자 오버라이딩
