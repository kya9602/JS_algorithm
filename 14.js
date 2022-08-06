let arr = [5, 9, 7, 10]
var divisor = 5;
var answer = [];



for(i=0;i<arr.length;i++){
    //console.log(arr[i]);
    if(arr[i] % divisor === 0){
        answer.push(arr[i]);
    }
}
answer.sort((a,b) => a-b);

if(answer.length === 0){
    answer.push(-1)
}

console.log(answer);