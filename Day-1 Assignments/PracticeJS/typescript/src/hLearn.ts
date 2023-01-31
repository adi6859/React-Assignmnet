let adi :string="Aditya";//variable initialization
console.log(adi);
let num=6//variable 
console.log(num);
adi.toLowerCase();
//number
let userId: number=335;
//boolean
let isBool : boolean=false;
//function creation
function addTwo(num:number){
    return num+2
}
addTwo(5);
//in case of string enter string ar the place of number
//arrow function
let loginUser=(name:string,isPaid:boolean)=>{

}
loginUser("Aditya",true);
//return type
function addTwou(num:number):number{
    return num+2
}
addTwou(6);
//arrow return type
const getHello=(s:string):string=>{
    return "";
}
//void return type
function consoleError(errmsg:string):void{
    console.log(errmsg);
}
//if i have not to return anytime i have to use never
//objects

const User={
    name:"Aditya",
    email:"aditya.ranjan@devtron.ai",
    isActive: true
}
// function createUser({name ,isPaid}){}

// createUser({name:"Aditya",isPaid:false});

function createCourse():{name:string,price:number}{
    return {name:"Aditya",price:657};
}





