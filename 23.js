var n = 12345;
var answer = [];

/* var n_n = n%10;
var n = (n/10)-(n_n/10);
console.log(n_n); //나머지
console.log(n) */

for(i=0;n>0;i++){
    var n_n = n%10;
    answer.push(n%10);
    n = (n/10)-(n_n/10);
}console.log(answer)

console.log(answer.reverse())