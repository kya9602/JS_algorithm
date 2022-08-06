absolutes =[4,7,12];
var answer = 0;
var signs = [true,false,true]; //true면 + , false면 -

for(var i=0;i<absolutes.length;i++){
    if(signs[i]==true){
        answer += absolutes[i]
    }else{
        answer -= absolutes[i]
    }
}console.log(answer)