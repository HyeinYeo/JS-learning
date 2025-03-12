/** Variables -> var 대신 let, const 사용하기
 * var, let, const
 * - var
 *    - 한 번 선언한 변수를 다시 선언할 수 있다.
 *    - 선언 전에 사용 가능(호이스팅) -> 할당은 안 되기 때문에 undefined
 *    - 선언과 동시에 초기화(undefined 할당해주는 것) 됨
 *    - 함수 스코프(오로지 function 내에서만 지역변수! 나머지는 전역으로 사용 가능)
 * 
 * - let
 *    - 한 번 선언한 변수를 다시 선언할 수 없다.
 *    - 선언 전에 사용 불가능
 *      - 호이스팅이 되지만, TDZ(Temporal Dead Zone) 때문에 사용 불가능
 *      - 호이스팅은 스코프 단위로 일어남
 *      - TDZ: 변수가 선언되기 전에 접근하면 에러가 발생하는 것
 *    - 선언, 초기화, 할당 모두 따로
 *    - 블록 스코프
 * 
 * - const
 *    - 한 번 선언한 변수를 다시 선언할 수 없다.
 *    - 선언, 초기화, 할당 동시에
 *    - 블록 스코프
 */

console.log(a); // undefined -> var는 호이스팅이 되기 때문에 선언 전에 사용 가능
var a = 1;

console.log(b);
let b = 2; // ReferenceError: Cannot access 'b' before initialization -> TDZ 때문에 선언 전에 사용 불가능
