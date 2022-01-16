// two symbols are never going to be same
// symbol are unique
let sym1 = Symbol('My Symbol');
let sym2 = Symbol('My Symbol');
console.log(sym1);
console.log(typeof sym1);
console.log(sym1===sym2);//false

const k1 = Symbol('First Symbol');
const k2 = Symbol('Second Symbol');
myObj = {};
myObj[k1]='suraj';
myObj[k2]='sams';
myObj['name']='good boy';
console.log(myObj[k1]);
// console.log(myObj.k1);//cannot use this because it is same as myObj["k1"];

for(key in myObj){
    console.log('For in loops:',key,myObj[key]);//Symbol are ignored
}
console.log(JSON.stringify(myObj));//Symbols are ignored


