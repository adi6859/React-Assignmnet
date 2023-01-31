let orderData={
    'Below 500':60,
    '500-1000':50,
    '1000-1500':20,
    'Above 2000':60
};
//a.calculate total no. of order placed.

let sum=0;
let order=Object.values(orderData);
order.forEach((num)=>{
    sum+=num;
});
console.log("Total number of order placed are: ",sum);

//b.calculate the total no. of order proportion option.

let options=Object.keys(orderData)
console.log(`the number of order proportion options are ${options.length}`)
//c.array of objects 
//fist I have calculated percentage
order.forEach((num)=>{
    console.log((100/sum)*num);
});

let arr=[]
let percentages=[]
for(let j=0;j<options.length;j++){
    percentages.push(order[j]/sum);
}
for(let i=0;i<options.length;i++){
    let obj={
        id:i+1,
        order:options[i],
        order_percentage:percentages[i]*100
    }
    arr.push(obj)
    
}
console.log(arr)

