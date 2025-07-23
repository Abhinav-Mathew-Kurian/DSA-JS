// palindrome of reversal of a string--call the function in fuction,check reversal of a string , check palindrome when calling thats all

function reverseStr(str){

    if(str.length<=1) return str;
    return reverseStr(str.slice(1))+str[0];
}


input ='malayalam'
console.log(reverseStr(input)===input); 
