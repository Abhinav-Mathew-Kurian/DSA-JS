// ❓ Problem:
// Find the length of the longest subarray with sum equal to k.

function largetSubArray(inp, k) {
    // Map to store the first occurrence of each prefix sum
    const map = new Map();

    // prefixSum will store the running sum from index 0 to i
    let prefixSum = 0;

    // maxLen stores the length of the longest subarray with sum = k
    let maxLen = 0;

    // Base case: to handle subarrays that start from index 0
    // We assume a prefixSum of 0 was seen at index -1
    map.set(0, -1);

    // Loop through the array
    for (let i = 0; i < inp.length; i++) {
        // Add the current number to the running sum
        prefixSum += inp[i];

        // Check if there exists a previous prefixSum such that:
        // current prefixSum - previous prefixSum = k
        // => subarray between those two indices has sum = k
        if (map.has(prefixSum - k)) {
            const prevIndex = map.get(prefixSum - k); // where that sum occurred
            const currLen = i - prevIndex;            // length of the valid subarray
            maxLen = Math.max(maxLen, currLen);       // update maxLen if needed
        }

        // Only record the *first* time we see a prefixSum
        // This ensures we get the *longest* possible subarray later
        if (!map.has(prefixSum)) {
            map.set(prefixSum, i); // store the index where this prefixSum first occurred
        }
    }

    // Return the longest length found
    return maxLen;
}



const nums = [1, 2, 3, -2, 5]
const k = 5
const ans= largetSubArray(nums,k)
console.log(ans)
