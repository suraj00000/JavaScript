// Object litreal

let obj ={
    name:"suraj",
    profession:"Computer Science"
}
console.log(obj);

function Obj(givenName){
    this.name=givenName;
}

Obj.prototype.getName=function(){//create new function in prototype section
    return this.name;
}
Obj.prototype.setName=function(newName){//create new function in prototype section
    this.name = newName;
}
let obj2=new Obj("Suraj");
obj2.setName("PAta");//change the value using prototype
console.log(obj2.name.toString());