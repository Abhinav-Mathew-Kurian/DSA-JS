// ❓ Question:
// Given an array of integers nums and an integer k,
// return the number of subarrays whose sum is exactly k.
// Input:
// nums = [1, 2, 3]
// k = 3

// Output: 2 eg: 1+2,3. use map-sub array question 

function prefixSum(inp,k){

    const map=new Map();
    let count =0;
    let prefixSum=0;
    map.set(0,1);
    for(let num of inp){
        prefixSum+=num;
          if (map.has(prefixSum - k)) {
            
            count += map.get(prefixSum - k);
        }
        console.log("num:",num)
        console.log("prefixSum=",prefixSum)
        console.log("K:",k)
        console.log("prefixSum-k:",prefixSum-k)
        console.log("count:",count)
        map.set(prefixSum, (map.get(prefixSum) || 0)+1)
        console.log(map)
    }

    return count;
}



const input = [1,2,3]
const k=3;
const ans= prefixSum(input,k)
console.log(ans)