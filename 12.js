var price = 3
var money = 20
var count =  4
var answer = 0 ;
var new_price = 0;
var need_money = 0;

for(i=0;i<count;i++){
    new_price += price
    //console.log(new_price)
    need_money += new_price
    //console.log(need_money)
}
if(money>need_money){
    answer = 0;
}else{
    answer = need_money - money
}
console.log(answer)

