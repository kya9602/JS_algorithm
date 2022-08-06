let day = ['SUN','MON','TUE','WED','THU','FRI','SAT']

// 생성자 함수 https://youtu.be/8hrSkOihmBI
let date = new Date(`2016-01-01`); // < Date = 생성자 
// 와플 기계로 와플을 찍어내는데 day라는 재료를 사용.

console.log(day[date.getDay()]) // getDay() = Date에서 현지 시간 기준 요일(0–6)을 반환합니다

var a=1, b=1;
let date1 = new Date(`2016-${a}-${b}`); // 백틱은 변수를 보기쉽게 관리. ${a} = a와의 위치를 바꾼다. google>js Date
console.log(day[date1.getDay()])

/*
function solution(a, b) {
    var answer = '';
    let day = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    let date = new Date(`2016-${a}-${b}`);
    answer = day[date.getDay()]  
    
    
    return answer;
}
*/