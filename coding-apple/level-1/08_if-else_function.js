// 1. 369 게임
function 삼육구게임(num){
    if (num % 3 == 0){
        console.log("박수");
    } else {
        console.log("통과");
    }
}


// 2. 369 게임 업그레이드 버전
function 삼육구업그레이드게임(num){
    if (num % 9 == 0){
        console.log("박수x2");
    } else if (num % 3 == 0){
        console.log("박수");
    } else {
        console.log("통과");
    }
}

// 3. 공인중개사 시험 합격 판독기
function 합격했냐(score1, score2){
    if ((score1 < 40 || score2 < 40) || score1 + score2 < 120) {
        console.log("불합격");
    } else {
        console.log("합격");
    }
}

// 4. 원래의 369
function 오리지널369(num){
    if ((num % 10 == 3) || (num % 10 == 6) || (num % 10 == 9)) {
        console.log("박수");
    } else {
        console.log("통과");
    }
}

// 5. 합격 판독기 응용
function 합격했냐v2(score1, score2){
    if ((score1 < 0) || (score1 > 100) || (score2 < 0) || (score2 > 100)){
        alert('장난 치지 마세요');
    } else if ((score1 < 40 || score2 < 40) || score1 + score2 < 120) {
        console.log("불합격");
    } else {
        console.log("합격");
    }
}
