// let a = document;
// a= document.all;//return all html
// a= document.forms[0];//return form
let a=document.links;
// console.log(a);
Array.from(a).forEach(function(element){
    let a = element.toString();
    if(a.search("code")!=-1)
    console.log(element);
});
