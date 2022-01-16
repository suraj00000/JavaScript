console.log("Array Destructuring");
let a,b;
[a,b]=[34,456];
// [a,b]=[b,a];//Simple reverse ;) 
console.log(a,b);
[a,b,c,...d]=[1,2,3,4,5,6,7,8,9,0]; // d will get remaining as a array
console.log(a,b,c,d);
({a,b,c,...d}={a:34,b:23,c:45,d:54,f:64,e:76})//!!use () for object !! d will get remaining as a object
console.log(a,b,c,d)

const fruits = ['apples','mangoes','banana','sdf','sdf','sdfs'];
[a,b,c,...d]=fruits;
console.log(a,b,c,d);// d will get remaining as a array

// Object Destructuring
laptop={
    model:'HP probook',
    processors:'intel i5 5500U',
    age:5,
    price:11500,
    start:()=>{
        console.log('Started');
    }
}
const {model,processors,age,price,start} = laptop;//use exact key to destructure object
console.log(model,processors,age,price);
start();