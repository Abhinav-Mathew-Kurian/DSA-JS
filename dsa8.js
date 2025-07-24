//sliding window  there will limit to slide or it should grow while poping

function lengthOfLongestSubstring(s) {
  let set = new Set();    // To store characters in window
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);   // shrink window from the left
      left++;
    }
    set.add(s[right]);       // expand window
    maxLen = Math.max(maxLen, right - left + 1); // track max length
  }

  return maxLen;
}


str='abcabcac'
const ans=lengthOfLongestSubstring(str)
console.log(ans)
