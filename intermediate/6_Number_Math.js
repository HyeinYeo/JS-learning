/** Number, Math
 * 1. toString()
 *    - 숫자를 문자열로 변환
 *    - toString(진수) : 진수에 맞게 변환
 * 
 * 2. Math
 *    - Math.abs(x) : 절대값
 *    - Math.ceil(x) : 올림
 *    - Math.floor(x) : 내림
 *    - Math.round(x) : 반올림
 *    - Math.max(...args) : 최대값
 *    - Math.min(...args) : 최소값
 *    - Math.random() : 0 이상 1 미만의 난수
 *    - Math.sign(x) : 부호
 *    - Math.sqrt(x) : 제곱근
 *    - Math.pow(x, y) : x의 y승
 *    - Math.log(x) : 자연로그
 *    - Math.log10(x) : 상용로그
 *    - Math.log2(x) : 밑이 2인 로그
 *    - Math.PI : 원주율
 *    - Math.E : 자연상수
 * 
 * 3. toFixed() : 소수점 자리수 고정
 *    - toFixed(n) : n자리까지 표시
 *    - 소수점 자리수가 n보다 많으면 반올림
 *    - 소수점 자리수가 n보다 적으면 0으로 채움
 *    - 반환값은 문자열 -> 숫자로 사용하려면 Number() 사용  
 * 
 * 4. isNaN() : NaN인지 확인
 *    - Number.isNaN() : NaN인지 확인
 *    - NaN은 자기 자신과 일치하지 않음
 * 
 * 5. parseInt(), parseFloat() -> 문자가 혼용되어 있어도 숫자로 변환
 *    - parseInt(str, radix) : 문자열을 정수로 변환 -> 읽을 수 있는 데까지 변환
 *    - parseFloat(str) : 문자열을 실수로 변환
 */

// 4. isNaN()
let x = Number('Hello'); // NaN
console.log(x == NaN); // false -> NaN은 자기 자신과 일치하지 않음
console.log(x === NaN); // false
console.log(NaN === NaN); // false

console.log(isNaN(x)); // true

// 5. parseInt(), parseFloat()
let margin = '10px';
parseInt(margin); // 10
Number(margin); // NaN