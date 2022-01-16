console.log("Call back ");

const students =[
    {name:"Suraj",subject:"javascript"},
    {name:"Suman",subject:"English"}
];

function enrollStudents(student,callback){
    setTimeout(() => {
        //code
        students.push(student);
        console.log("Student has been pushed");
        callback();//call after code excection

    }, 5000);//3000 ke baad execude hoga code
};
function getStudents(student){
    setTimeout(function(){
        let str = "";
        students.forEach(function(student){
            str+=`<li>${student.name}</li>`;
        });
        document.getElementById('students').innerHTML = str;
        console.log("GetStudent");
    },1000);
};

let newStudent = {name:'sunny',subject:'python'};
enrollStudents(newStudent,getStudents);
// getStudents();
// students.forEach(_Call_back_function_)

