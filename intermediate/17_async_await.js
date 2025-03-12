/** async, await
 * 1. async
 *   - 이 키워드 붙여주면 항상 Promise 반환 => 함수 호출에 then 사용 가능
 *   - 예외 발생 시, rejected 상태의 Promise 뱐환
 * 
 * 2. await
 *   - async 함수 내부에서만 사용 가능
 *   - 키워드 오른쪽에는 Promise가 오고, 그 Promise가 처리될 때까지 기다림
 * 
 */

// 1. async
async function getName(){
    // return "Mike";
    return Promise.resolve("Tom");
    // throw new Error("err..."); 
}

getName()
.then((name) => {
    console.log(name);
}).catch((err) => {
    console.log(err);
});

// 2. await
async function getNickName(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 1000);
    });
}

async function showName(){ // 1초 후에 결과 찍힘
    const result = await getNickName("MK");
    console.log(result);
}

console.log("시작");
showName(); 

// Promise 코드 고치기
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
/*  // 이전 코드
console.log("시작");
f1()
    .then((res) => f2(res))
    .then((res) => f3(res))
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("끝"));
 */
console.log("시작");
async function order(){
    try{
        const result1 = await f1();
        const result2 = await f2(result1);
        const result3 = await f3(result2);
        console.log(result3);

        // Promise.all
        const result = await Promise.all([f1(), f2(), f3()]);
        console.log(result);

    } catch(e){
        console.log(e);
    }
    console.log("종료");
}
order();