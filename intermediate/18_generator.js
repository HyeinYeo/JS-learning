/** generator
 * - 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
 * - 값을 미리 만들어 두지 않음(필요한 순간까지 미루기 가능)
 * 
 * - next()
 *   - 호출 시, 가장 가까운 yield문 만날 때까지 실행되고 데이터 객체 반환
 *   - 인수 전달 가능
 *   - 반환되는 객체의 프로퍼티: value, done
 *      - value는 yield 뒤에 있는 값
 *      - done : 함수 코드가 끝났는지 나타남(t/f)
 * 
 * - return()
 *   - 호출 시, done 속성이 즉시 true가 됨(끝남)
 * 
 * - throw()
 *   - 호출 시, 예외 캐치 되고(try~catch로 감쌌을 경우) 끝남
 * 
 * ** iterator
 *  - next 메서드를 가짐
 *  - next 메서드는 value와 done 속성 가진 객체 반환
 *  - 작업 끝나면 done은 true가 됨
 *  
 *  - 배열, 문자열도
 *  - for ... of 사용 가능
 * 
 *  - yield* 이용
 */

function* fn(){
    try{
        console.log(1);
        yield 1;
        console.log(2);
        yield 2;
        console.log(3);
        console.log(4);
        yield 3;

        return "finish";
    } catch (e){
        console.log(e);
    }
}

const a = fn();
a.next();
a.return("END"); // value가 END가 됨
a.throw(new Error("err"));

// yield*
function* gen1(){
    yield "W";
    yield "O";
    yield "R";
    yield "L";
    yield "D";
}

function* gen2(){
    yield "Hello,";
    yield* gen1(); // 모든 이터레이터 호출 가능!
    yield "!";
}

console.log(...gen2()); // 구조 분해 할당 사용 -> done이 true 될 때까지 펼쳐 줌
                        // Hello, W O R L D !

