//sliding window return longest substring which is unique

function longestUniqueSubstring(s) {
  let set = new Set();
  let left = 0;
  let maxLen = 0;
  let startIdx = 0;   // where the best substring starts

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);

    if (right - left + 1 > maxLen) {
      maxLen = right - left + 1;
      startIdx = left;   // update best starting point
    }
  }

  return s.substring(startIdx, startIdx + maxLen);
}

str='abcabcac'
const ans=longestUniqueSubstring(str)
console.log(ans)