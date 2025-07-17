//  Q1. Remove All Adjacent Duplicates in String
// 🧠 Logic: Use stack to cancel out adjacent pairs.

// 🔹 Input: "abbaca"
// 🔹 Output: "ca"

function removeAdjacentDuplicates(s){

    let stack =[];
    let str='';

    for(let char of s){
        if(char==stack[stack.length-1]){
            stack.pop();
        }
        else{
            stack.push(char)
        }
    }
    for(let i =0;i< stack.length;i++){
        str=str+stack[i];
    }
    return str;

}


const input = "abbaca"
const ans=removeAdjacentDuplicates(input)
console.log(ans);