
let mybtn = document.getElementById('myBtn');

let content = document.getElementById('content');
// function getData(){
//     console.error("In getData");
//     url = 'suraj.txt';
//     fetch(url).then((response)=>{
//         console.error("In first then");
//         return response.text();
//     }).then((data)=>{
//         console.error("In second then");
//         console.log(data);
//     })
// }
// function getData(){
//     console.error("In getData");
//     url = 'https://api.github.com/users';
//     fetch(url).then((response)=>{
//         console.error("In first then");
//         return response.json();
//     }).then((data)=>{
//         console.error("In second then");
//         console.log(data);
//     })
// }

function getData(){
    url = 'https://dummy.restapiexample.com/api/v1/create';
    data='{"name":"4123111","salary":"123","age":"23"}';
    params ={
        method:"post",
        headers:{
            'Context-Type':'application/json'
        },
        body:data // use JSON.stringfy() for object
    };
    fetch(url,params).then(response=>response.json())
    .then(data=>console.log(data))
}

getData();
