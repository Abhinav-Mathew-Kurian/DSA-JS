// 🧾 Problem:
// Given a string s, find the length of the longest substring without repeating characters.

// Input: "abcpbcbb"
// Output: 3 → "abc"


function longSubArray(s) {
  let set = new Set();
  let left = 0, maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}




const input ="abcpabcbb";
const ans= longSubArray(input);
console.log(ans)