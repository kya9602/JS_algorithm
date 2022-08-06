var arr1 = [[1,2],[2,3]]
var arr2 = [[3,4],[5,6]]
var answer =[] ;
for(i=0;i<arr1.length;i++){
    let sum =[] ; // sum 초기화

    for(j=0;j<arr1[i].length;j++){
        //console.log(i,j)
        //console.log(arr1[i][j]+arr2[i][j])
        sum.push(arr1[i][j]+arr2[i][j]);
    }
    //console.log(sum)
    answer.push(sum)
}
console.log(answer)