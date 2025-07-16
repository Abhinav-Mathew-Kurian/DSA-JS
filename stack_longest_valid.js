 //  Problem: Longest Valid Parentheses
 // ❓Question:
// // Given a string containing just '(' and ')', return the length of the longest valid (well-formed) parentheses substring.
// Input: "(()"
// Output: 2
// Explanation: Longest valid is "()"

// Input: ")()())"
// Output: 4
// Explanation: Longest valid is "()()"

// Input: ""
// Output: 0

function longestValidParentheses(s) {
    let stack = [-1]; 
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === '(') {
            stack.push(i); // Push index of opening parenthesis
        } else { // char === ')'
            stack.pop(); // Pop the matching opening parenthesis

            if (stack.length === 0) {
                // If stack becomes empty, it means the current ')' has no matching '(' in the current valid sequence.
                // Push the current index as a new "base" or "start point" for the next valid sequence.
                stack.push(i);
            } else {
                // If stack is not empty, a matching '(' was found.
                // The length of this valid sequence is current_index - stack.top_element_index
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            }
        }
    }
    return maxLength;
}

const input ="()()"
const ans= longestValidParentheses(input);
console.log(ans)