// let s = 'javascriptloops';
// string(s);

// function string(a){
//     let temp=[];
//     for(let i=0;i<a.length;i++){        
//         if(a[i]==='a'||a[i]==='e'||a[i]==='i'||a[i]==='o'||a[i]==='u'){
//         console.log(a[i]);        
//         }else{
//             temp.push(a[i]);
//         }
//     }
//     temp.forEach(Element=>console.log(Element));
// }

// let num = 4;
// factorial(4);
// function factorial(n){
//     let sum = 1;
//     for(let i=2;i<=n;i++){
//         // console.log(i);
//         sum = sum*i;
//     }
//     console.log(sum);
// }
let btn = document.getElementById('btn');
let A=0;
btn.addEventListener('click',function(){   
    A++;
    btn.innerHTML =A;
});

// console.log(getGrade(11));
// function getGrade(score) {
//     let grade;
//     if(score<=5){
//         grade="F";
//     }else if(score<=10){
//         grade="E";
//     }else if(score<=15){
//         grade="D";
//     }else if(score<=20){
//         grade="C";
//     }else if(score<=25){
//         grade="B";
//     }else
//     console.log("A");
    
//     return grade;
// }
// console.log(getLetter('abcd'));
// function getLetter(s) {
//     let letter;
//     // console.log(s[0]);
//     switch (s[0]) {
//         case 'a':case'e':case'i':case'o':case'u':
//             letter = 'A';    
//             break;
//         case 'b':case'c':case'd':case'f':case'g':
//             letter = 'B';            
//             break;
//         case 'h':case'j':case'k':case'l':case'm':
//             letter = 'C';            
//             break;
//         case 'n':case'q':case'p':case'r':case's':case't':case'v':case'w':case'x':case'y':case'z':
//             letter = 'D';            
//             break;
//         default:
//             break;
//     }    
//     return letter;
// }

let num = [2 ,3 ,6 ,6 ,5];
console.log(secondLargestNumber(num));
function secondLargestNumber(num){
    num.sort();
    for(let i=0;i<num.length;i++){
        console.log(num[i]);
    }
    for(let i=(num.length-2);i>=0;i--){        
        if(num[i]!=num[num.length-1]){
            return num[i];
        }
    }
}











// function print2largest(arr, arr_size) {
//     let i, first, second;

//     // There should be atleast two elements
//     if (arr_size < 2) {
//         console.log(" Invalid Input ");
//         return;
//     }

//     // sort the array
//     arr.sort();

//     // start from second last element
//     // as the largest element is at last
//     for (i = arr_size - 2; i >= 0; i--) {
//         // if the element is not
//         // equal to largest element
//         if (arr[i] != arr[arr_size - 1]) {
//             console.log("The second largest element is " + arr[i]);
//             return;
//         }
//     }

//     console.log("There is no second largest element<br>");
// }

// // Driver program to test above function

// let arr= [ 12, 35, 1, 35, 34, 35 ];
// let n = arr.length;
// print2largest(arr, n);