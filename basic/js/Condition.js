const age ='18';
// == is for only value check
// === check for  value and type
if(age==19){
    console.log("age is 19");
}else if(age==='18'){
    console.log("age is eighteen")
}else{
    console.log("age is not 18");
}

// turnary 
console.log(age==='18'?'age is 18':'age is not 18');

switch (age) {
    case '18':
        console.log('age is 18 switch');        
        break;
    case 19:
        console.log('age is 19');        
        break;
    default:
        break;
}