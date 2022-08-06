var n2 = 123;
var n = 123123123;
n = String(n);
var answer=0;

for(i=0;i<n.length;i++){
    //console.log(Number(n.charAt(i)))
    answer +=Number(n.charAt(i))
}console.log(answer)