var numbers = [1,2,3,4,6,7,8,0];
var answer = 0;

//.includes(값) : 배열에서 값이 존재하면 true, 
//존재하지 않으면 false 반환

for (var i=0; i<10;i++){
    //console.log(numbers.includes(i))
    if(!numbers.includes(i)){
        answer += i;
    }
}
console.log(answer)