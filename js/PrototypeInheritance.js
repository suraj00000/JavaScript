const proto ={
    slogan:function(){
        return 'This company is the best';
    },
    changeName:function(newName){
        this.name = newName;
    }
};
const Suraj=Object.create(proto);//this only has [[Prototype]]
Suraj.name="Suraj";//but after this it has name and [[prototype]]
Suraj.role="Programmer";
Suraj.changeName="Suman";
// console.log(proto.slogan()); // you can also call it by it real name

// this also create object 
const suraj1  = Object.create(proto,{
    name:{value:"suraj1",writable:true},
    role:{value:"Programmer"}
});
suraj1.name = "ssdf";//cannot be usefull if "writable:true" is not specifyed
// console.log(suraj1);


// Employe constructor
function Employee(name,salary,experience){
    this.name = name;
    this.salary = salary;
    this.salary = experience;
}
// Slogan
Employee.prototype.slogan = function(){
    return `this company is the best. Regards,${this.name}`;
}

let surajConstructer = new Employee('suraj',10000000,10);
// console.log(surajConstructer);
// console.log(surajConstructer.slogan());

function Programmer(name,salary,experience,language){
    Employee.call(this,name,salary,experience);//Old way to inherete 
    this.language=language;
}
// Inherit the prototype
Programmer.prototype=Employee.prototype;//prototype ko copy karne ke lye
// Manually set the constructor
Programmer.prototype.constructor = Employee.prototype.constructor;//Employee ka constructor aajayega
let sohan = new Programmer("Rohan",2,0,"JavaScript");
// console.log(sohan);


