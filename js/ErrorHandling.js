let a = 'string';
 a = undefined;
if(a!=undefined){
    throw new Error("Error");    
 }else{
     console.log("Not error");
 }

 try {
     let a = ['sdf','sdf'];

     console.log(ath);
 } catch (error) {
     console.log("Error"+error.name);
     console.log("Error"+error.message);
 } finally{
     console.log("Finally");
 }