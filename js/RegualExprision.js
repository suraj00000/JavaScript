console.log("Regual exprision");

let reg = /suraj/; // this is a regual exprision litreral in js
reg = /Suraj/g; // g -> global search the entire string
// reg = /suraj/i; // i-> for not case sensitivity

// console.log(reg);
// console.log(reg.source);

let s = "this is a great code by Suraj. Suraj is also means sun ,Suraj";
// function to mathch expression
//1.exex() - this function will return an array for match(exect ) or null for no match

let result = reg.exec(s);
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result); --->we can use multiple exec with global flag
if(result){
// console.log(result);
// console.log(result.index);
// console.log(result.input);
}

//2.test() - Return true or false for match
let result2 = reg.test(s);
// console.log(result2);

// 3. string.match(RegualExpresion)-it will return "array of result"->multiple otherwise null
result2 = s.match(reg);
// console.log(result2);

// 4.string.search(RegualExpresion) - Return 'index' of first match else -1
let search = s.search(reg);
console.log(search);

// 5.replace()-retuen new replaced string with all the replacement
let resultReplace =s.replace(reg,'suman');
console.log(resultReplace);

