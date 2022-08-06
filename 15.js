var a = [1,2,3,4];
var b = [-3,-1,0,2];
var answer = 0;
var gop = 0;
//내적 = 간단하게 a0b0 + a1b1 ... anbn;

//console.log(a.length)
//console.log(a[1])
for(i=0;i<a.length;i++){
    //console.log(a[i] * b[i])
    gop = (a[i] * b[i])
    answer += gop;
}console.log(answer)