/** String 메소드
 * 1. 백틱
 *    - 여러 줄 표현 가능
 * 
 * 2. length : 문자열 길이 반환
 * 
 * 3. 특정 위치 접근
 *    - 배열과 비슷하게 접근 가능
 *    - 한 글자만 바꾸는 건 불가능
 * 
 * 4. toLowerCase(), toUpperCase()
 *    - 대소문자 변환
 * 
 * 5. indexOf(), lastIndexOf()
 *    - 특정 문자열의 위치를 찾아줌
 *    - 없으면 -1 반환
 *    - 여러 개라도 맨 처음 찾은 것만 반환
 *    - if문 사용 시 주의
 * 
 * 6. slice(start, end) : 문자열 일부 추출
 *    - start부터 end 전까지 추출
 *    - end 생략 시 끝까지
 *    - 음수 쓰면 뒤에서부터
 * 
 * 7. substring(start, end) : 문자열 일부 추출
 *    - start부터 end 전까지 추출
 *    - 음수는 0으로 처리
 *    - start가 end보다 크면 뒤집어서 처리
 * 
 * 8. substr(start, length) : 문자열 일부 추출
 *    - start부터 length만큼 추출
 *    - length가 음수면 뒤에서부터
 * 
 * 9. trim() : 문자열 앞뒤 공백 제거
 * 
 * 10. repeat(n) : 문자열 반복
 * 
 * 11. 아스키 코드 -> 문자열 비교 가능
 *    - "string".codePointAt(0) : 아스키 코드 반환
 *    - String.fromCharCode(아스키코드) : 문자열 반환
 * 
 * 12. includes(), startsWith(), endsWith()
 *    - 특정 문자열이 있는지 확인
 */

// 1. 백틱
let str = `Hello
World`;
console.log(str); // Hello\nWorld

// 2. length
console.log(str.length); // 11

// 3. 특정 위치 접근
console.log(str[0]); // H
str[1] = 'a'; // 불가능
console.log(str); // Hello\nWorld -> 변경 안 됨

// 4. toLowerCase(), toUpperCase()

// 5. indexOf(), lastIndexOf()
let s = 'Hello World';
if (s.indexOf('H')){ // 0이 반환되어 false가 됨
    console.log('H가 있습니다.');
}
if (s.indexOf('H') > -1){ // -1이 아닌 0이 반환되어 true가 됨
    console.log('H가 있습니다.');
}

// 10. repeat(n)
console.log('Hello'.repeat(3)); // HelloHelloHello