/** alert, prompt, confirm
 * 1. alert, prompt, confirm
 *   - 사용자와 상호작용
 * 
 *   - alert : 알려줌(확인 버튼만 있음)
 * 
 *   - prompt : 입력 받음(확인, 취소 버튼)
 *     - 입력하지 않고 취소하면 null 반환
 *     - 디폴트값 입력 가능
 * 
 *   - confirm : 확인 받음(확인, 취소 버튼), 사용자 액션을 한 번 더 확인할 때 사용
 *     - 확인 누르면 true, 취소 누르면 false 반환
 * 
 * 2. 단점
 *  - 떠 있는 동안 스크립트 일시 정지
 *  - 스타일링 불가 -> 모달창으로 대체
 */

const name = prompt("이름을 입력하세요."); // 입력 안 하고 취소하면 null
alert("환영합니다, " + name + " 님"); // alert("환영합니다, ${name} 님"); 도 가능

const date = prompt("예약일을 입력하세요.", "2021-07-"); // 디폴트값 입력 가능(인수 2개)


const isAdult = confirm("당신은 성인입니까?"); // 확인 누르면 true, 취소 누르면 false
console.log(isAdult); // true or false 출력





