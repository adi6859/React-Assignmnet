function printData(var1:number){
    console.log(var1);
}
console.log(printData(1));//return undefined

function printD(var1:number):number{
    console.log(var1);
    return var1;
}
console.log(printData(1));//return undefined
//never return type will not return anything
//it is done when function doesnot reach end
//void return type will return undefined

//union
let mobNum:number | string="56677578";
//if we dont know the exact data type then we use union

function PrintValue(value:number[] | number){
    if(Array.isArray(value)){
        value.forEach((number,index)=>{
            console.log(number);
        });
    }else{
        console.log("Is a number")
    }
}
PrintValue(7);

//enum
enum feedback{
    BAD = "Not Perfect",
    GOOD ="OK",
    Excellent = "Awesome",
}
console.log(feedback);