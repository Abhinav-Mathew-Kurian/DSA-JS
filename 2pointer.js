function twoSumSorted(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [left + 1, right + 1]; // 1-based index
    } else if (sum < target) {
      left++; // need a bigger sum
    } else {
      right--; // need a smaller sum
    }
  }

  return []; // if no match
}

console.log(twoSumSorted([2, 7, 11, 15], 9)); // [1, 2]
console.log(twoSumSorted([1, 2, 3, 4, 6], 10)); // [4, 5]
console.log(twoSumSorted([2, 3, 4], 6)); // [1, 3]
