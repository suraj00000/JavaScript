// const arr1=[{
//     name:'suraj'
// }];
// const arr2 =[{
//     name:'kushwaha'
// }];

// // Mearge the arrays
// // Destructuring
// const arr3 = [...arr1,...arr2];
// console.log(arr3);

// const name='sumdan'

// const obj1={
//     name:'suraj'
// }
// const obj2={
//     name,
//     age:22
// }
// const obj3={
//     ...obj1,
//     ...obj2
// }
// console.log(obj3);

// ArrowFunctions
function likethis() {
    //all the normal functions are hoist(Placed at the top) by th JavaScript engine
    
    return 2;
}

const aFunctionLikethis = () => {

    return 2;
    // this arrow function cannot be called before declaration
    // first declare  the call
}

const aArrowFunction =(arg)=> arg**2;
const aArrowFunction2 =arg=> arg**2;//For single argument only
console.log(aFunctionLikethis());
console.log(aArrowFunction(25));
console.log(aArrowFunction2(25));