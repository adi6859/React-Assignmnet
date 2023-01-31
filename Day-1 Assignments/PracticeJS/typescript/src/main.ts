let text: string="text";
let nValue: number = 10;

function abc(a:any){}//not suggested so avoid it
abc("a");
let student = {name:"Aditya",age:30};
//array
let array:number[]=[10,40];
//array type must be specified like here number is defined
//type =>
type Student={
    name: string;//readonly name: string; it is used to only act as readonly
    age: number;
    mobile: number;
}
let studnt : Student={ name: "Aditya",age:22,mobile:232242};
console.log(studnt);
interface Studentdetail{
    readonly name: string;//readonly name: string; it is used to only act as readonly
    age: number;
    mobile: number;
}

//the major diff b/w type and interface 
type person={
    name: string;
    age:number;
};
type officeDetail=person &{salary:number;offdays:number};

let empDetail: officeDetail={
    name:"Adi",
    age : 30,
    salary:35,
    offdays: 4,

}
//if we define interface again and again with same name then it will merge with previous data 
//types cannot me merged it creates a error
interface emp{
    age:number;
}
interface emp{
    name: string;
}
//this is the example



