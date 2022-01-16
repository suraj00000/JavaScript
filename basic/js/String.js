const name = "suraj";
const greetings = "Good morning";

console.log(greetings +' '+ name);

let html;
//concantinate
html = "<h1>this is my paragraph</h1>"+
        "sdsdsdsd";
html=html.concat(' this',' str2');
console.log(html);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
 
let fruit1 = 'Orange';
let fruit2 = 'Apple';
let html1 = `Hello ${name} 
            <h1> This is heading</h1>
            <p>you like ${fruit1} and ${fruit2}`;

document.body.innerHTML = html1;