var s = "Pyy"
var p = 0 ;
var y = 0 ;
var answer = false ;
for(i=0;i<s.length;i++){
    //console.log(s.charAt(i))
    if( s.charAt(i) == 'p' || s.charAt(i) == 'P'){
        p+=1;
    }else if(s.charAt(i) == 'y' || s.charAt(i) == 'Y'){
        y+=1;
    }
}
if(p==y){
    answer = true ;
}console.log(answer)