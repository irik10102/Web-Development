var arr:number[] = [1,2,3,4,5,6,7,8,9,10];

var sum:number = arr.reduce((acc,val,ind)=>{
    if(ind%2 == 0){
        acc = acc + val;
    }
    return acc;
},0);

console.log(sum);