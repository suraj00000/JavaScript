
async function suraj(){
    console.log("inside function");
    const response=await fetch('https://api.github.com/users');
    console.warn("Before response");
    const users = await response.json();
    console.warn('user resolve');
    return users;    
}//return promise after excutiong
console.log("Before calling");
let ar = suraj();
console.log("after calling");
console.log(ar);
ar.then((data)=>console.log(data));
console.log("last line");