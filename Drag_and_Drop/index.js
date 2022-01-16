const imgBox = document.querySelector('.imgBox');
const whiteBox = document.getElementsByClassName('whiteBox');//for all class with name whitebox() querySelectorAll can also ne usefull

imgBox.addEventListener('dragstart',(e)=>{   
   e.target.className +=' hold';
   setTimeout(() => {
    e.target.className=' hide';       
   }, 0);
   
});
imgBox.addEventListener('dragend',(e)=>{
    // console.log("Drag stop") ;
    e.target.className  = 'imgBox';
});

for (const iterator of whiteBox) {
    iterator.addEventListener('dragover',(e)=>{
        e.preventDefault();
        // console.log('dragover');       

    });
    iterator.addEventListener('dragenter',(e)=>{
        e.target.className+=' dashed';
        
    })
    iterator.addEventListener('dragleave',(e)=>{
        console.log('dragleave');        
        e.target.className=' whiteBox';
        
        
    })
    iterator.addEventListener('drop',(e)=>{
        console.log('drop');
        e.target.append(imgBox);
        
    })

}