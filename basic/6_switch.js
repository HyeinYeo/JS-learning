/** Switch statement
 *   - break를 만나면 switch문을 빠져나옴 -> break가 없으면 다음 case로 넘어감
 *   - default는 switch문에 해당하는 case가 없을 때 실행
 */

let fruit = prompt("무슨 과일을 좋아하세요?");

switch (fruit) {
    case "apple":
        console.log("100원입니다.");
        break;
    case "banana":
        console.log("200원입니다.");
        break;
    case "kiwi":
        console.log("300원입니다.");
        break;
    case "melon":
    case "watermelon":
        console.log("500원입니다."); // 여러 case를 묶을 수 있음
        break;
    default:
        console.log("죄송합니다. 그런 과일은 없습니다.");
        break;
}