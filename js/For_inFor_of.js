let people = ["harry", "suman", "suraj", "nisarg", "Akash", "karan"];

// Tradisional For loop
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);
// }
let obj = {
  name: "Rohan Das",
  age: 18,
  city: "Kolkata",
  framework: "Django",
  language: "Python",
  Image: "https://randomuser.me/api/portraits/men/66.jpg",
};

// Tradisional For loop
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }


// For in loop (works with object,string keys)
for(let key in obj){
    // console.log(key,':',obj[key])
}
// For in loop (works with String)
let myString = "This is a String";

for(let char in myString){
    // console.log(myString[char]);
}


// *************for of loops*****************

// quickest way to iterate throught string
for(let name of people){
    console.log(name);
}
// also works with String
for(let name of myString){
    console.log(name);
}