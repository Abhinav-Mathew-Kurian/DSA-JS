


function targetOutput(arr,tar){

    const target =tar;
    console.log("target locked:",tar)
    let ansArr=[];

    for(let i =0;i<arr.length;i++){
        for (let j=i+1; j<arr.length;j++){
            // console.log("i",i,"j",j)
            if(arr[i]+arr[j]==tar){
                ansArr.push([i,j])
            }
        }
    }
    return ansArr;

}




const input=[2, 7, 4, 5, 1, 3]
const target =6;

const ans=targetOutput(input,6);
console.log(ans)