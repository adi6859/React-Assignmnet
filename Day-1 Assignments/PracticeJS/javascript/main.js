//variable
//ES5
//console.log(studentMobile)//this will show reference error

var studentname ="Aditya";
var studentname="Ranjan";
//es6
let studentMobile = 123456789;//good to use this as re-declare is not possible
const studentmarks = 98;//we cannot change the value of const
//studentmarks=45 this will show error
console.log(studentname,studentMobile,studentmarks);

//check datatype
let datatype="aditya";
console.log(typeof datatype)//this will show datatype as string
/***
 * js can change its datatype in runtime
 * so it is called losely coupled language
 * string("Aditya")
 * number(5)
 * object(null is of this datatype)
 * undefined( )
 * 
*/
let a=2;
let b="5";
//Implicit Type casting
console.log(a*b);//here it is not showing error as typecasting happens
console.log(a+b);//type casee to string comes under implicit typecasting
b=Number(b);//explicit typecasting
console.log(a+b);
let c=2;
let d="3a";
d=Number(d);
console.log(c+d);//output NaN

//Assignmnet operator 
//Arithmetic
//comparison 
/**
 * ==(only to check value even data type is not same)
 * ===(check value with data-type)
 * !=(only value will be checked)
 * !==(check vale with datatype)
 */
//logical
let myName="Aditya"
switch(myName){
    case "Ravi":
        console.log("student found and its Ravi");
        break;
    case "Aditya":
        console.log("student found and its Aditya");
        break;
    case "Ram":
        console.log("student found and its Ram");
        break;
    default:
        console.log("student not found");
        break;  
}

//loop
/**
 * for , while , dowhile, forEach
 */
/**
 * for of
 * for in
 */
//about function
// reusable
// controls
function nameofFunction(){
    console.log("this is a function")

}//function definition

nameofFunction();//function call
let func3=function(){
    console.log("expression function");
};//expression function
func3();
let func2=nameofFunction;//assigning a definition to variable
func2();
//function with parameter
function add(var1,var2){
    console.log(var1+var2);
}
add(10,34);
add();//output NaN if not passed with zero

//array
//dataType of array is object
let arrName=[123,'a',null,false];//indexing from 0
console.log(arrName);//output [123,'a',null,false]
//for in
for(let index in arrName){
    console.log(arrName[index]);
}
//for of
for(let value of arrName){
    console.log(value);

}
//index value
arrName.forEach(function getArrData(value,index){
    console.log(value,index);
});
/**
 * function on array
 * map,filter,find,split,replace,join,pop,flatmap,shift,unshift,splice
 */
let NumArr=[10,20,30,40,50,10];
let searchN=40;
let result = NumArr.find(function(value,index){
    return value==searchN;
});//find return search result
console.log(result);
let Filterresult = NumArr.filter(function(value,index){
    return value==searchN;
});//fiLTER return search result array
console.log(Filterresult);
// let Mapresult = NumArr.map(function(value,index){
//     return value*2;
// });//map is used to change value of full array if we select full itteraion
// console.log(Mapresult);
let Mapresult = NumArr.map(function(value,index){
    return `<li> ${value*2}</li>`;//`` is used to run js
});//map is used to change value of full array if we select full itteraion
console.log(Mapresult);
Mapresult=Mapresult.join("");//convert array to string
//add data in array =>push()
//numarr.push(100,200)

//delete record from array
NumArr.splice(2,1)//index,deletecount
console.log(NumArr);
const myArrr=[10,20,30,40];//array stored by refrences
myArrr.push(2);//thats why pushing happens here
console.log(myArrr);
//spread Operator 
let arr1=["Aditya"];
let arr2=[10,20,30,40];
let arr3=[...arr1, ...arr2];
arr1[0]="abs";
console.log(arr3);//output [ 'Aditya', 10, 20, 30, 40 ]

//js object
//collection of key value,here we can use userdefined key
let obj = {
    name: "Apple",
    date: "12-04-2022"
};
console.log(obj); //output: { name: 'Apple', date: '12-04-2022' }

obj["location"]="Gurugram";
console.log(obj);//output:{ name: 'Apple', date: '12-04-2022', location: 'Gurugram' }

//to get keys
let keys=Object.keys(obj);
console.log(keys);//[ 'name', 'date', 'location' ]
//to get value
let values=Object.values(obj);
console.log(values);//[ 'Apple', '12-04-2022', 'Gurugram' ]
//to keys and value
let all=Object.entries(obj);
console.log(all);/**[
    [ 'name', 'Apple' ],
    [ 'date', '12-04-2022' ],
    [ 'location', 'Gurugram' ]
  ]*/
  /*********************/
//   let emp={
//     name:"Adi",
//     eiD:112,
//     print:function(){
//         console.log(eiD);
//     },
//   };//we cannot acces eiD
  //to access eiD we have use it with this keyword

  //console.log(this.eiD);
//1s=1000ms

let emp={
    name:"ADI",
    eId:23,
    printUser:function(){
        setInterval(()=>{
            console.log(this.eId);
        },1000);

    }
};






