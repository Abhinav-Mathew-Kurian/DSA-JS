//  Min Remove to Make Valid Parentheses
// ❓Question:
// Given a string s of '(', ')', and lowercase English characters, remove the minimum number of parentheses to make the input string valid. Return the resulting string.

// 🧠 Example:
// Input: "a)b(c)d"  
// Output: "ab(c)d"

// Input: "))(("  
// Output: ""  
function minRemoveToMakeValid(s) {
  const stack = [];
  const indexesToRemove = new Set();

  // First pass to track invalid ')' and all '('
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(") {
      stack.push(i); // store index
    } else if (char === ")") {
      if (stack.length === 0) {
        // unmatched closing
        indexesToRemove.add(i);
      } else {
        stack.pop(); // matched opening
      }
    }
  }

  // Now remove leftover unmatched '('
  for (let i of stack) {
    indexesToRemove.add(i);
  }

  // Build final string
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (!indexesToRemove.has(i)) {
      result += s[i];
    }
  }

  return result;
}
const input = "a)b(c)d";
console.log("OUTPUT:",minRemoveToMakeValid(input));  // Output: "ab(c)d"

const input2 = "))((";
console.log("OUTPUT:",minRemoveToMakeValid(input2)); // Output: ""
