/** setTimeout, setInterval
 * 1.setTimeout: 일정 시간이 지난 후 함수 실행
 *   - setTimeout(func, 시간)
 *   - tid 반환
 * 
 * 2. setInterval: 일정 시간 간격으로 함수 반복
 *   - tid 반환
 * 
 * 3. clearTimeout : 예정된 작업 없앰
 */

// 1. setTimeout
// -  기본
function fn(){
    console.log("3초 지남");
}
setTimeout(fn, 3000);

// - 줄여 쓰기
setTimeout(function(){
    console.log("3초 지남2");
}, 3000);

// 인수
function fn2(name){
    console.log(name);
}
setTimeout(fn2, 3000, "Mike");


// 2, 3.
let num = 0;

function showTime(){
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
    if (num > 5){
        clearInterval(tid);
    }
}
const tid = setInterval(showTime, 1000);