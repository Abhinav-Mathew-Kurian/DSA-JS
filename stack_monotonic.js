// ❓ Problem: Daily Temperatures
// You are given an array of temperatures.
// For each day, return how many days you would have to wait until a warmer temperature.
// If there is no future day for which this is possible, put 0 for that day.
// Input:  [73, 74, 75, 71, 69, 72, 76, 73]
// Output: [ 1,  1,  4,  2,  1,  1,  0,  0]

function dailyTemprature(temp){

    let stack =[];
    let result = new Array(temp.length).fill(0);
    for(let i=0;i<temp.length;i++){

        while(stack.length >0 && temp[i] > temp[stack[stack.length-1]] ){
                let previosIndex=stack.pop()
                 result[previosIndex]=i-previosIndex;
        }
        stack.push(i)
    }
    return result;
}




const input =[73, 74, 75, 71, 69, 72, 76, 73];
const ans= dailyTemprature(input);
console.log(ans)