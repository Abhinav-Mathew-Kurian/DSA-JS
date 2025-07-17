// ❓ Question:
// Given an encoded string, return its decoded version.
// 🔸 Rules:
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times.
// 🧠 Example:
// Input: "3[a]2[bc]"
// Output: "aaabcbc"
// Input: "3[a2[c]]"
// Output: "accaccacc"

function stringDecode(s) {
  const strStack = []; // 📦 To store strings before each '['
  const numStack = []; // 🔢 To store repeat counts before each '['
  let currentStr = ""; // 🧵 String currently being built
  let currentNum = 0; // 🧮 Number currently being built

  for (let char of s) {
    // ✅ If digit, build the multiplier (can be more than one digit)
    if (!isNaN(char)) {
      currentNum = currentNum * 10 + Number(char); // Example: '12' → 1*10+2 = 12
    }

    // ✅ If opening bracket, push state & reset
    else if (char === "[") {
      numStack.push(currentNum); // Save the multiplier for the current block
      strStack.push(currentStr); // Save the string built so far
      currentNum = 0; // Reset for next number
      currentStr = ""; // Start fresh for the new bracketed part
    }

    // ✅ If closing bracket, build new string using stack values
    else if (char === "]") {
      const repeatCount = numStack.pop(); // How many times to repeat
      const prevStr = strStack.pop(); // String built before this '['
      currentStr = prevStr + currentStr.repeat(repeatCount); // Append repeated to previous
    }

    // ✅ If character, build the current substring
    else {
      currentStr += char; // Add letter to current string block
    }
  }

  return currentStr; // 🏁 Final decoded string
}

const input = "3[a2[c]]";
const ans = stringDecode(input);
console.log(ans);