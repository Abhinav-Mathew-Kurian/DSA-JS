
function greatString(s) {
    let stack = [];
    for (let char of s) {
        if (
            stack.length > 0 &&
            Math.abs(char.charCodeAt(0) - stack[stack.length - 1].charCodeAt(0)) == 32
        ) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    return stack.join('');
}




const input = "leEeetcode"
const ans = greatString(input);
console.log(ans)