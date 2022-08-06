var s1 = "abcde"
var s2 = "qwer"
var answer = ""


//홀수일경우
answer = s1.length/2
console.log(answer)

answer = s1[s1.length/2-0.5]
console.log(answer)

//짝수일경우
answer = s2.length/2
console.log(answer)

answer = s2[s2.length/2]
console.log(answer)

answer = s2[s2.length/2-1]
console.log(answer)
//
answer = s2[s2.length/2]+s2[s2.length/2-1]
console.log(answer)


var s = "abcde"
//짝수일경우
    if (s%2==0){  
    answer = s[s.length/2-1] + s[s.length/2]
    console.log(answer)
//홀수일경우
    }else{
    answer = s[s.length/2-0.5]
    console.log(answer)
    }
