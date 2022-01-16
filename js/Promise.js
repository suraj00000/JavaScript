console.log("Hello");
// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully. ",then()"=>resolve()
// rejected: meaning that the operation failed.".catch()"=>"reject()"

function function1(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const error = true;
            if(!error){
                console.log('you promise has been resolve');
                resolve();
            }else{
            console.log("Promise has not been resolve");
            reject('Sorry not fulfield');
        }
        },2000);

    });
}
function1().then(function(){ //then => resolve
    console.log("successful!!");
}).catch(function(error){ //catch=>reject
    console.log(("unsuccessful : "+error));
}).finally(function(){
    console.log("Finally");
});