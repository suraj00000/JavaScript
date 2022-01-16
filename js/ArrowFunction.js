// Regual function
//  const suraj = function() {
//      console.log("hello");
//     }
// Converting it in to Arrow function
// const suraj = ()=>{
//     console.log("hello");
// }


// function to greet function
// const greet = function(){
//     return "Good Morning";
// }

// one lineres donot requred braces/return
// const greet = ()=> "Good Morning";
// const greet = ()=> ({name:"Good Morning"});// for object use () brackets

// const greet = name=>"Good mornig "+name; //for one argument () is not required
const greet = (name,ending)=>"Good mornig "+name+ending; //for two argument () is required

console.log(greet('suraj','by'));




