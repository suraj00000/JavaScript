console.log("Hello");

// let regex = /^s/i;

//you can use multiple character set at one time; 
let regex =/s[dsf]raj/;//any one charcters within braclets matches the string(d,s,f)
 regex =/s[a-z]raj/;//a to Z 
 regex =/s[^sdf]r[a-zA-Z][jJsd]/;//hera ^ means does not of {a,t,y}

 // Quatifiers
regex = /suraj{2}/;//2 times
regex = /suraj{0,10}/;//0 to 10 times  j{times}


// Groupings - we use paranthesis for groupings()
regex =/(sur){2}([a-z]j)/;//grouping of set

 




 const str = "suraJ sursuraj is a javascript programmer. surajj";
if(regex.test(str)){
    console.log(`The String "${str}" matches the expression ${regex.source}`)
}else{
    console.error(`The String "${str}" does not match the expression ${regex.source}`)
}
