// 효율성에서 박살..

let participant = ["mislav", "stanko", "mislav", "ana"]
let completion = ["stanko", "ana", "mislav"]
var answer = '';


for(i=0;i<participant.length;i++){
    for(j=0;j<completion.length;j++){
        //console.log(participant[i],completion[j])
        if (participant[i]==completion[j]){
            delete participant[i];
            delete completion[j];
            break;
        }    
    }
}
for(i=0;i<participant.length;i++){
    if( /*!*/ participant[i] ){
        //console.log(participant[i])
        answer=participant[i];
      }
}
console.log(answer)