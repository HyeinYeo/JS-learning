/** 형변환
 * String() : 문자형으로 변환
 * Number() : 숫자형으로 변환
 * Boolean() : 불린형으로 변환
 */

const mathScore = prompt("수학 점수를 입력하세요"); // 90 입력 -> 문자형
const engScore = prompt("영어 점수를 입력하세요"); // 80 입력 -> 문자형
const result = (mathScore + engScore) / 2; // "9080" / 2 -> "9080"이 숫자형으로 묵시적 변환됨

console.log(result); // 4045 -> prompt로 입력 받으면 무조건 문자형



// String()
console.log(
    String(3), // "3"
    String(true), // "true"
    String(false),  // "false"
    String(null),   // "null"
    String(undefined) // "undefined"
);

// Number()
console.log(
    Number("123"), // 123
    Number("123.456"), // 123.456

    Number("123 456"), // NaN : 숫자 사이에 공백이 있으면 NaN
    Number("문자"), // NaN : 숫자가 아닌 문자가 있으면 NaN

    Number(true), // 1
    Number(false), // 0

    // 주의!
    Number(null), // 0 : null은 0으로 변환 -> prompt에서 취소하면 null 넘어오는 것과 연관
    Number(undefined), // NaN : undefined는 숫자로 변환할 수 없음
);

// Boolean()
console.log( 
    // 아래 외에는 모두 true
    Boolean(""), // false : 빈 문자열은 false
    Boolean(0), // false : 0은 false
    Boolean(null), // false : null은 false
    Boolean(undefined), // false : undefined는 false
    Boolean(NaN), // false : NaN은 false

    // 주의!
    Boolean(0), // false : 0은 false
    Boolean("0"), // true : 문자 0은 true

    Boolean(""), // false : 빈 문자열은 false
    Boolean(" ") // true : 공백은 true
);