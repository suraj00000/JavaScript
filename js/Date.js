console.log("Hello");
let today = new Date();
// console.log(typeof today);
let otherDate = new Date('5-4-2000 04:54:08');
// otherDate = new Date('04/05/2000');
let a = otherDate.getDay();
otherDate.setDate(23);
otherDate.setFullYear(1999);
otherDate.setHours(01);
otherDate.setMinutes(45);
otherDate.setSeconds(10);
a = otherDate.getDay();// sunday =0 ...
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getSeconds();
a = otherDate.getHours();
a = otherDate.getTime();
a = otherDate.getMonth();
console.log(otherDate); 
