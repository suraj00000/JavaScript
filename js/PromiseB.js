console.log("Call back ");

const students =[
    {name:"Suraj",subject:"javascript"},
    {name:"Suman",subject:"English"}
];

function enrollStudents(student){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            students.push(student);
            console.log("Student has been pushed");
            const error = false;
            if(!error){
                resolve();//then function
            }else{
                reject();//catch function
            }           
    
        }, 1000);        
        
    });    
};
function getStudents(student){
    setTimeout(function(){
        let str = "";
        students.forEach(function(student){
            str+=`<li>${student.name}</li>`;
        });
        document.getElementById('students').innerHTML = str;
        console.log("students pushed");
    },1000);
};

let newStudent = {name:'sunny',subject:'python'};
enrollStudents(newStudent).then(getStudents).catch(function(e){
    console.log('error');
});
// getStudents();
// students.forEach(_Call_back_function_)

