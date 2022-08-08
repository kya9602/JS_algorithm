var arr = [5,3,2,6];
var answer=[];

/* (arr.sort().reverse().pop());

if(arr.length != 0){
    answer = arr;
}else{
    answer.push(-1)
}
console.log(answer) 
정렬을 하면 안 됐다 ... 배열 순서를 건드려선 안된다.
배열의 순서 자체가 의미있는 데이터일 수 있기 때문에 섣불리 sorting을 하는 습관을 가지면 안된다
*/
//var s = Math.min(...arr);
//console.log(s);

//var s = arr.indexOf(Math.min(...arr))
//console.log(s);

//arr.splice(arr.indexOf(Math.min(...arr)), 1);
//console.log(arr);

arr.splice(arr.indexOf(Math.min(...arr)), 1);
    
if(arr.length<=0){
    arr = [-1]
}

console.log(arr)