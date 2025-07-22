//unique two sum number 

function uniqueTwoSum(arr, tar) {
  const seen = new Set(); // stores values we've seen
  const pairs = new Set(); // stores unique value pairs as strings

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    const complement = tar - curr;

    if (seen.has(complement)) {
      const low = Math.min(curr, complement);
      const high = Math.max(curr, complement);
      const pair = `${low}-${high}`; // convert to string to store in set

      pairs.add(pair); // Set avoids duplicates automatically
    }

    seen.add(curr); // remember we've seen curr
  }

  // Convert string pairs like "2-4" back to arrays [2, 4]
  return [...pairs].map(pair => pair.split("-").map(Number));
}

const input = [2, 4, 3, 3, 5, 1, 5, 2];
const target = 6;

const ans = uniqueTwoSum(input, target);
console.log("Unique Value Pairs That Sum to Target:", ans);
