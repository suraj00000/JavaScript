// For
// while
// do while

// for(let i=0;i<100;++i){
//     console.log(i);
// }


// let a = 0;
// let b = a++;
// console.log(a);
// console.log('b ='+b);
//  b = ++a;
// console.log(a);
// console.log('b ='+b);

// let k=0;
// do{
//     if(k==5){
//         break;

//     }
//     console.log(k);
//     k+=1;    
// }while(k<10);
let arr = [2,3,4,53,2,3];

arr.forEach(function(element1,index,array){
    console.log(element1+"|"+index+'|'+array);
})
let obj = {
    name:"suraj kushwaha",
    age: 20,
    type:"nothing"
}
for(let key in obj){
    console.log(`${key} = ${obj[key]}`);
}