
function finalPrice(price){

    let stack=[];
    let result=[...price];
    for(let i=0;i<price.length;i++){

        while(stack.length>0 && price[i] <= price[stack[stack.length-1]]){
            let previosIndex=stack.pop();
            result[previosIndex]= price[previosIndex]-price[i];
        }
        stack.push(i)
    }

    return result;
    

}






const input = [8,4,6,2,3]
const ans= finalPrice(input);
console.log(ans)