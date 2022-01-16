let divv = document.createElement('div');
let val = localStorage.getItem('text1');
let text;
if(val == null){
    text= document.createTextNode('This is editable element');
}else{
    text = document.createTextNode(val);
}
divv.appendChild(text);
divv.className = 'JSDiv';
divv.id='JSdiv';
divv.style = 'border:2px solid black; width: 154px; margin: 34px; padding:23px;';




let container = document.querySelector('.container');
// let element = document.getElementById('myfirst');
container.appendChild(divv);
// element = document.getElementsByTagName('div');
console.log(container);

divv.addEventListener('click',function(){
    let notextarea = document.getElementsByClassName('textarea').length;
    if(notextarea==0){
        let html = divv.innerHTML;
        divv.innerHTML = `<textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
        
    }
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur',function(){
        divv.innerHTML = textarea.value;
        localStorage.setItem('text1',textarea.value);
    })
});


















// let element2 = document.getElementById('JSdiv');


// if(element2){
//     element2.addEventListener('click',function1);
// }
// const edittext = document.createElement('input');
// edittext.id = 'edittext';
// edittext.type = 'text';
// function function1(e) {        
//     element.removeChild(document.getElementById('JSdiv'));
//     element.appendChild(edittext);
//     //  divv.innerHTML = '<h1>changed</h1>';
//     // console.log("Clicked");
// };
// let element3 = document.getElementById('edittext');
// if(element3){
//     console.log("sad");
// element3.addEventListener('blur',function () {
//     // divv.innerText =  edittext.innerText;
//     console.log(edittext.innerText);    
// });
// }

// document.getElementById('fisrtDiv').addEventListener('blur',function2);