var s = "1345.5"
var answer;
//s가 4 & 6 인 문자열(정수라는 말이 없다 ....킁)
//숫자로만 구성되어야 한다.

// 관계연산자 공부하기
//console.log(((s.length === 4 || s.length === 6)&& s == Number(s)))
console.log(((s.length === 4 || s.length === 6)&& s == parseInt(s)))



/*
// 1<= s.length <=8
var a = "a1234"
console.log('a1234',Number(a)) //not a number
var a = "1234"
console.log('1234',Number(a))
var a = "1234.5"
console.log('1234.5',Number(a))
*/


/*
// == 과 ===의 차이점
var b = 0;
var c = '0';
console.log('b==c',b==c);
console.log('b===c',b===c);
*/
