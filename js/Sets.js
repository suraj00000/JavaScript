// console.log("Sets")
// It store unique value
const mySet = new Set();
mySet.add('this');
mySet.add('my name');
mySet.add('my name');
mySet.add('456');
mySet.add(55);
mySet.add(true);
mySet.add(false);
// console.log(mySet);

let mySet2 = new Set([23,443,'234','suraj']);
// console.log(mySet2);
// console.log(mySet2.size);
// console.log(mySet.has(55));//true if it has this value false if not have value
// mySet.delete(55);//delete the value
// console.log(mySet.has(55));

// Iterate throught sets

for(let item of mySet){
    console.log(item);
};
mySet.forEach((item)=>{
    console.log('ForEach:',item);
});
let arr= Array.from(mySet);
console.log(arr);