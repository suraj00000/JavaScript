console.log("Hello");

// let regex = /^s/i;

//you can use multiple character set at one time; 
let regex =/s\wraj/;    //word character _ or alphabet or numbers
regex = /\w+pt/;        //  \w+ means onr or more characters
regex = /\Wis/;         //  Non word characters
regex = /\W+is/;        //  Non multiple word characters
regex = /number \d1/;   // any digit after "9"
regex = /number \d+/;   // more then one digit
regex = /\D+999/;       // more then non-digit then "999"
regex = /\sa javascript/ // white space (also more then one white space)
regex = /\s+a javascript/ // white space (also more then one white space)
regex = /\Savascript/ // non-white space 
regex = /\S+avascript/ // non-white space (one or more then one)
regex = /sursuraj\b/ //word boundry


// Assertions
regex = /s(?=u)/;//s ke baad only u
regex = /s(?!u)/;//s ke baad u ke alawa kuch bhi



const str = "%suraJ sursuraj ////***is a javascript pt programmer. surajj number 9164974565 suraj999";
let result = regex.exec(str);
console.log(result);

 
if(regex.test(str)){
    console.log(`The String "${str}" matches the expression ${regex.source}`)
}else{
    console.error(`The String "${str}" does not match the expression ${regex.source}`)
}
