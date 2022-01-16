console.log("Element creation and removing");
//element 
let element = document.createElement('li');
let element1 = document.createElement('li');
let text = document.createTextNode('I am a text node');
let text1 = document.createTextNode('I am a stext node');
element.appendChild(text);
element1.appendChild(text1);
// element class name
element.className = 'childul';
element.id = 'createLi';
element.setAttribute('Title','mytital');
// element.innerText = 'Hello this is created by JS';//only text
// element.innerHTML = '<b>Hello this is created by JS<b>';//element

let ul  = document.querySelector('ul.this');
ul.appendChild(element);
ul.appendChild(element1);
console.log(ul);
console.log(element);


let elem1  = document.createElement('h3');
elem1.id = 'elem1';
elem1.className = 'elem1';
let node3 = document.createTextNode('Hello first is node');
elem1.appendChild(node3);
element.replaceWith(elem1);

let myUl = document.getElementById('myul');
myUl.replaceChild(element,document.getElementById('child1ID'));
myUl.removeChild(document.getElementById('child6'));


let temp = elem1.hasAttribute('class');
temp = elem1.getAttribute('class');
elem1.removeAttribute('class');
elem1.setAttribute('Title','tHIS IS Title')
console.log(document.getElementById('elem1'),temp);


let element2  = document.getElementById("myfirst");
let harryA = document.createElement('a');
harryA.setAttribute('href','https://ww.codewithharry.com');
harryA.innerHTML = `<h1>Go to CodewithHarry</h1>`;
console.log(harryA);
element2.appendChild(harryA);

