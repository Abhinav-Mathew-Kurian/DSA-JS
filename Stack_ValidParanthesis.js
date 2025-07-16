// Q1. Valid Parentheses
// ❓Question:
// Given a string containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.

// A string is valid if:

// Open brackets are closed by the same type of brackets.

// Brackets are closed in the correct order.
// Input: "()[]{}"      Output: true  
// Input: "(]"          Output: false  
// Input: "([)]"        Output: false  
// Input: "{[]}"        Output: true

function validParanthesis(inp){
    let stack=[];
    const map ={
        ')':'(',
        ']':'[',
        '}':'{',
    }
   
    for(let char of inp){
        if(map[char]){
            const top= stack.pop();
            if(top!==map[char]){
                return false;
            }
        }else{
            stack.push(char)
        }
    }
return stack.length===0
}




const input=""
const ans = validParanthesis(input);
console.log(ans)
