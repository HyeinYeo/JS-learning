/** Promise
 *  - 일정 시간 후에 콜백 함수를 실행하도록 하는 것
 *      - 콜백 지옥 방지
 *  - Promise 객체에 있는 것
 *    - state
 *      - 초기 상태: pending(대기)
 *      - 성공하면(resolve): fullfiled(이행됨)
 *      - 실패하면(reject): rejected(거부됨)
 *    - result
 *      - 초기 상태: undefined
 *      - 성공하면: resolve(value)의 value가 배정됨
 *      - 실패하면: regected(error)의 error가 배정됨
 * 
 *  - 클라이언트 입장
 *      .then( 성공 )
 *      .catch( 에러 )
 *      .finally( 무관하게 항상 실행 )
 * 
 *  2. 프로미스 체이닝
 * 
 *  3. Promise.all
 *    - Promise가 넘겨주는 값이 배열로 들어옴
 *    - 한꺼번에 시작하고, 모두 이행되었을 때 값 사용 가능 -> 순차적으로 했을 때보다 시간 절약 가능
 *    - 하나라도 에러 나면 사용 불가
 *    - 하나의 정보라도 누락되면 페이지 아예 보여주지 않을 때 사용 가능
 * 
 *  4. Promise.race
 *    - 하나라도 1등으로 완료되면 끝남
 *    - 용량 큰 이미지 보여줄 때 사용 가능
 * 
 */

const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("OK");
        // reject(new Error("err...."));
    }, 1000);
});

console.log("시작");
pr.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("끝");
});

// 2. 프로미스 체이닝
// 상황: 총 3개의 상품을 주문해서 알려주기

// 2-1. 콜백 지옥
/* 
const f1 = (callback) => {
    setTimeout(function(){
        console.log("1번 주문 완료");
        callback();
    }, 1000);
};
const f2 = (callback) => {
    setTimeout(function(){
        console.log("2번 주문 완료");
        callback();
    }, 3000);
};
const f3 = (callback) => {
    setTimeout(function(){
        console.log("3번 주문 완료");
        callback();
    }, 2000);
};
console.log("시작");
f1(function(){
    f2(function(){
        f3(function() {
            console.log("끝");
        });
    });
}); 
*/

// 2-2. 프로미스 사용
const f1 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};
const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("2번 주문 완료");
        }, 3000);
    });
};
const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};

console.log("시작");
f1()
    .then((res) => f2(res))
    .then((res) => f3(res))
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("끝"));

// 3. Promise.all
Promise.all([f1(), f2(), f3()])
.then((res) => {
    console.log(res);
});

// 4. Promise.race
Promise.race([f1(), f2(), f3()])
.then((res) => {
    console.log(res);
});