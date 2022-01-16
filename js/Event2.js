let btn = document.getElementById('btn');
// btn.addEventListener('click',fun1);
// btn.addEventListener('dblclick',fun2);
// btn.addEventListener('mousedown',fun3);
// btn.addEventListener('mousedown',fun3);

// document.querySelector('.no').addEventListener('mouseenter',function(){
//     console.log("mouseEnterred");
// });
// document.querySelector('.no').addEventListener('mouseleave',function(){
//     console.log("mouseLeave");
// });
document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetX+e.offsetY})`
});
// function fun1(e){
//  console.log("clicked",e);
//  e.preventDefault();
// };
// function fun2(e){
//     console.log("double clicked",e);
//     e.preventDefault();
//    };
//    function fun3(e){
//     console.log("mouse down",e); 
//     e.preventDefault();
//    };