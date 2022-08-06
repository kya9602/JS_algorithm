var n = 6;
var new_n = n ;
var answer = 0;

for(i=0; i<500; i++){
    if(new_n == 1){ // 1. 1이 됐는지 확인!
        answer = i;
        break;
    }else if(i==499){ // 2. i 가 500 이하인지 확인 !
        answer = -1;       
    }
    else if(new_n % 2 == 0){ // 3. 짝수인지 확인 !
        new_n = new_n/2;        
    }else{                  // 4. 홀수 라면 ! 
        new_n = (new_n*3)+1 
    }
}console.log(answer)