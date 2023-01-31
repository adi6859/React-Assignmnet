"use strict";
function printData(var1) {
    console.log(var1);
}
console.log(printData(1)); //return undefined
function printD(var1) {
    console.log(var1);
    return var1;
}
console.log(printData(1)); //return undefined
//never return type will not return anything
//it is done when function doesnot reach end
//void return type will return undefined
//union
let mobNum = "56677578";
//if we dont know the exact data type then we use union
function PrintValue(value) {
    if (Array.isArray(value)) {
        value.forEach((number, index) => {
            console.log(number);
        });
    }
    else {
        console.log("Is a number");
    }
}
PrintValue(7);
//enum
var feedback;
(function (feedback) {
    feedback["BAD"] = "Not Perfect";
    feedback["GOOD"] = "OK";
    feedback["Excellent"] = "Awesome";
})(feedback || (feedback = {}));
console.log(feedback);
