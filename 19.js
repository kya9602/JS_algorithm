var c = 0;
var n = 199;
var answer = '';


for(i=0;i<n;i++){
    if(c==0){  
        answer+='수';
        c=1;
    }else{
        answer+='박';
        c=0;
    }
    
}console.log(answer)