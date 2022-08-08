var s = "AAA AAAA AAAA";
var answer = '';
//단어별 짝수(0포함) = 대문자, 홀수 = 대문자
s = s.split(' '); // 띄어쓰기로 가르기
for (var i=0;i<s.length;i++){ // 단어마다
    //console.log(s.length)    

    for(var j=0;j<s[i].length;j++){ // 한글자씩
        if(j%2==0){ // 2. 0 or 짝수라면 대문자를 추가
            answer += s[i].charAt(j).toUpperCase();            
        }else{ // 3. 홀수면 그대로 추가
            answer += s[i].charAt(j).toLowerCase();
        }
        
    }
    if(i<s.length-1){
        answer += ' ';
    } 
}console.log(answer)