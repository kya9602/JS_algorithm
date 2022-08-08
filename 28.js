var x = 11;
answer = true;
var n = '';
n = String(x)
var s=0;

for(i=0;i<n.length;i++){
    s += (Number(n.charAt(i)))
}
if(x%s==0){
    answer = true;
}else{
    answer = false;
}console.log(answer)