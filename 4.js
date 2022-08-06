var a = 3;
var b = 5;
var c = 0;
var answer = 0;

// 3부터5까지 모두 더해라
if(a>b){
    c = b;
    b = a;
    a = c;
}

for (var i =a; i<b+1 ;i++){
    answer = answer + i
}
console.log(answer)