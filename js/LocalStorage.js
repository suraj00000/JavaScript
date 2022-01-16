// Add a key-value pair inside localStorage
localStorage.setItem('Name','suraj');
// localStorage.clear();

// remove
localStorage.removeItem('Name')
// retrive
let name = localStorage.getItem('Name');
// console.log(name);

let impArray = ['apple','pineapple','grapes'];
// localStorage.setItem('Fruits',impArray);
// console.log(localStorage.getItem('Fruits')); // return string

// if yoy want to store a Array or object in side a array
localStorage.setItem('Fruits',JSON.stringify(impArray));
let arrayy = JSON.parse(localStorage.getItem('Fruits'));
// console.log(arrayy); 
sessionStorage.setItem('Name','suraj');
console.log(sessionStorage.getItem('Name'));
