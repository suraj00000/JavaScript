let regex = /suraj/;
regex=/^pro/; //^ carat means String start with
regex =/ng$/;//string end with
regex=/s.raj/;//machers any one character
regex=/s*raj/;//machers any 0 or more character
regex=/sx?uraji?/;//one word before _? is optional
regex=/sura\*j/;//exact match with metacharacters




let str = "suraj is a programmer.suraj loves programming. sura*j";
let result = regex.exec(str);
console.log(result);

if(regex.test(str)){
    console.warn(`The String "${str}" matches the expression ${regex.source}`)
}else{
    console.error(`The String "${str}" does not match the expression ${regex.source}`)
}
