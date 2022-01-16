console.log("hello");

class Employee {
  constructor(name, exprience, division) {
    this.name = name;
    this.exprience = exprience;
    this.division = division;
  }
  slogan(){
      return `My name is ${this.name}. I'm in ${this.division}`;
  }
  joiningYear(){
      return 2020-this.exprience;

  }
  //you can use it without using class name
  static add(a,b){
      return a+b;
  }
}

let suraj = new Employee('Suraj',10,'IT');
console.log(suraj.slogan());
console.log(suraj.joiningYear());
console.log(Employee.add(45,45));//cannot call any function expet static by using class name
console.log();

// Inheritance

class Programmer extends Employee{
    constructor(name, exprience, division,laguage,github){
        super(name,exprience,division);
        this.language = laguage;
        this.github=github;
    }
    print(){
        console.log(this.name);
        console.log(this.exprience);
        console.log(this.division);
        console.log(this.language);
        console.log(this.github);
    }
    
    static addition(a,b){
        return super.add(a,b);
    }

}
let programmer = new Programmer("Suraj",10,"IT",'javascript','suraj00000');
console.log(programmer);
programmer.print();
console.log(Programmer.addition(5,5));