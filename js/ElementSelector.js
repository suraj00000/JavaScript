/*

element selector:
1. Single Element Selector
2. Multi Element Selector
  
 */
// single selector
let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = "Tempo";
element.innerHTML = "<h1>Hello in red</h1>"
// console.log(element);





let sel = document.querySelector('#myfirst');
sel = document.querySelector("div");
sel.style.color = 'green';
// console.log(sel);


// multi selector

let elem = document.getElementsByClassName('child');
elem = document.getElementsByClassName('container');
// console.log(elem[0].getElementsByClassName('child'));
elem = document.getElementsByTagName('div'); // html tag
console.log(elem);

for (let index = 0; index < elem.length; index++) {
    const element = elem[index];
    element.style.color = 'red';    
}

// Array.from(elem).forEach(element => {
//     console.log(element);
//     element.style.color = 'red';
// });