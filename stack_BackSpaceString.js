//  Q2. Backspace String Compare
// ❓ Question:
// Given two strings s and t, return true if they are equal when both are typed into empty text editors.
// '#' means a backspace character.
// Input: s = "ab#c", t = "ad#c"
// Output: true
// // Explanation: Both become "ac"

function backSpaceStrCompare(s,t){
    let stack=[];
    let str1=''
    let str2=''
    for(let char of s){
        if(char==='#'){
            stack.pop();
        }else{
            stack.push(char);
        }
    }
    for(let i =0;i<stack.length;i++){
        str1=str1+stack[i];
    }
    stack=[];
      for(let char of t){
        if(char==='#'){
            stack.pop();
        }else{
            stack.push(char);
        }
    }
    for(let i =0;i<stack.length;i++){
        str2=str2+stack[i];
    }

    return str1==str2
}




const str1="ab#c"
const str2="ad#c"
const ans=backSpaceStrCompare(str1,str2);
console.log(ans);