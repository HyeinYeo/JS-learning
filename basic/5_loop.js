/** 반복문
 * 1. for
 * 2. while
 * 3. do while
 * 4. break
 * 5. continue
 */

// for
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// while
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// do while
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10); // 세미콜론 필수! -> while문과 구분

// 무한루프 + break
while (true) {
    let answer = confirm("계속 할까요?"); // 확인 누르면 true, 취소 누르면 false
    if (!answer) {
        break; // 반복문 탈출
    }
}

// continue
for (let i = 0; i < 10; i++) {
    if (i % 2) { // 홀수일 때 1이므로 true -> continue
        continue; 
    }
    console.log(i); // 짝수일 때만 출력
}