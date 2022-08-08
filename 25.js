var n = 121;
var answer ;
/* for(i=0;i<7071068;i++){
    var n_n = i*i
    if(n_n==n){
        a = i;
        break;
    }else{
        continue;
    }
}*/

//Math.sqrt // 제곱근.
//isInteger() //정수 .
var n = Math.sqrt(n)
//console.log(Number.isInteger(n))

if(Number.isInteger(n)==true){
    answer = (n+1)*(n+1) ;
}else{answer = -1}
console.log(answer)

