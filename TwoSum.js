// Given an array nums and a target number target, return the indices of the two numbers such that they add up to target.

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Because nums[0] + nums[1] = 2 + 7 = 9

function twoSum(s,t){
let map =new Map();
if(s.length<2){
    return 0;
}
for(let i=0;i<s.length;i++){
    let current = s[i];
    let complement = t - current; 
    if(map.has(complement)){
        return [map.get(complement),i]
    }else{
        map.set(current,i)
    }
}

return [];

}




const input=[2, 7, 2, 15];
const target=9;
const ans = twoSum(input,target);
console.log(ans)