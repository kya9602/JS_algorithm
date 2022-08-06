//phone_number는 길이 4 이상, 20이하인 문자열입니다.

var phone_number = "01033334444";
var n1='';
var n2=0;
var answer = '';
//0103333 444 4
//0123456 789 10
for(var i=0;i<phone_number.length-4;i++){
    n1 += ('*')
}

for(var i=0;i<phone_number.length;i++){
    n2 = phone_number.substring(phone_number.length-4,phone_number.length)
}
answer = n1 + n2
console.log(answer)