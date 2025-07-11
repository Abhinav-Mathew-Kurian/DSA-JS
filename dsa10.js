// longest 2 distinct Substring using sliding window and map

// Function to find the longest substring with at most 2 distinct characters
function longest2distinctSubstring(s) {
    let map = new Map();          // To track frequency of characters in the current window
    let left = 0;                 // Left boundary of the sliding window
    let maxLen = 0;               // Length of the longest valid substring found
    let startIdx = 0;             // Starting index of that substring

    // Expand the window by moving the right boundary
    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // Add/update the count of current character in the map
        map.set(char, (map.get(char) || 0) + 1);

        // Shrink the window from the left if we have more than 2 distinct characters
        while (map.size > 2) {
            const leftChar = s[left];                    // Character at the left pointer
            map.set(leftChar, map.get(leftChar) - 1);    // Decrease its count in the map

            // If the count becomes 0, remove it completely from the map
            if (map.get(leftChar) === 0) {
                map.delete(leftChar);
            }
            left++;  // Move the left pointer to shrink the window
        }

        // Update maxLen and startIdx if the current window is the largest so far
        if (right - left + 1 > maxLen) {
            maxLen = right - left + 1;  // Length of current valid window
            startIdx = left;            // Save starting index
        }
    }

    // Return the actual longest substring using saved start index and max length
    return s.substring(startIdx, startIdx + maxLen);
}





str = "ccaabbb"
const ans = longest2distinctSubstring(str);
console.log(ans)