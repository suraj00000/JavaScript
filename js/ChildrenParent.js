let cont = document.querySelector('.no');
 cont = document.querySelector('.container');
 let nodeName = cont.childNodes[0].nodeName;
 let nodeType = cont.childNodes[0].nodeType;
//  console.log(nodeName);
//  console.log(nodeType);

 /* NoteType
  1 element
  2 Attribute
  3 Text node
  8 comment
  9 document
  10 docType
  */

// console.log(cont.childNodes);//it take line as a string even comment also tabs
// console.log(cont.children);//it take only takes element
let container = document.querySelector('div.container');
// // console.log(container.children[1].children[0].children);
// console.log(container.firstChild);//childnode ka first node
// console.log(container.firstElementChild);//childnode ka first element
// console.log(container.lasttChild);//childnode ka last node
// console.log(container.lastElementChild);//childnode ka last element
// console.log(container.childElementCount);//number of element

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);
