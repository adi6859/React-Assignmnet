"use strict";
//tuple
let myArray = ["text", 20, true];
console.log(myArray);
myArray.push(11);
console.log(myArray);
//here it can push 11 also that is a problem
//Generics
//function printData(var1:number|string){//here union is used to avoid limitation of passing datatype
//    console.log(var1);
//}//limitation of passing datatype
let _aNumArray = [10];
let aNumArray = [10]; //we can assign during runtime
console.log(aNumArray);
//use of generic in function
function pData(var1) {
    let myVal;
    console.log(var1);
}
pData(true);
pData("Aditya");
//here we are achieving reusability of by generic
// class Add<T>{
//     val1:T;
//     constructor(val1:T)
// }
