//Destructuring
let array=[10,20,30,40,50,60];
//let v1=array[0];
//let v2=array[1];
let [v1,v2]=array;
console.log(v1,v2);
let res={
    name:"KFC",
    loc:"Gurugram",
    minCost:999,
};
let {name:resName,location:city,minCost}=res;
console.log(resName,city,minCost);

//spread

let a1=[1,3,2];
let a2=[10,20,30];

//rest
function add(... v1){
    console.log(v1);
}
add(10,20,30,40,50);

//default Rest
//generators
function* printvalues(){
    yield 1;
    yield 2;
    yield 3;
}
let gen=printvalues();
console.log(gen.next());
//promise(async)
//assignment is submitted in time
//=>true =>resolve=>then(){} or try {variable}
//=>false=>Reject => catch(){}
// function assignmentStatus(status){
//     if(status){
//         console.log('assignment is submitted in time ')
//     }else{
//         console.log('failed to submit')
//     }
// }
// let assignment=true;
// assignmentStatus(assignment);


//we can handle this whole function using promise
async function assignmentStatus(status){
    if(status){
        return Promise.resolve('assignment is submitted in time ')
    }else{
        return Promise.reject('failed to submit')
    }
}
let assignment=true;
assignmentStatus(assignment).then((result)=>{
    console.log(result);
});
//console.throw block the code but console.log will not block
/**async await
 * hold the function until the promise is ressolved  
 */

//fetch api
//XHR alternative for api
async function checkStatus(status){
    switch (status){
        case 200:
            return Promise.resolve(true);
        case 404:
            return Promise.reject("page not found");
        default:
            return Promise.reject("server error")
    }
}
async function getProductList(){
    try{
    let url = "https://fakestoreapi.com/products/2";
    let response =await fetch(url);
    await checkStatus(response.status);
    let data = await response.json();
    console.log(data);
    }catch(errorMessage){
        alert(errorMessage);
    }
}


getProductList();