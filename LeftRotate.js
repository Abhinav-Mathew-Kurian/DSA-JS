// Sample Input

// STDIN      Function
// -----      --------
// 5 4         n = 5 d = 4
// 1 2 3 4 5  arr = [1, 2, 3, 4, 5]
// Sample Output

// 5 1 2 3 4


function rotateLeft(d, arr) {
    const n = arr.length;

    // Handle cases where d is larger than n or negative (optional, but good practice)
    d = d % n; // This handles cases where d is greater than n, e.g., rotating 5 times on an array of length 5 is same as 0 rotations.

    if (d === 0) {
        return arr; // No rotation needed
    }

    // Get the elements from the rotation point to the end
    const firstPart = arr.slice(d);
    console.log("firstPart:",firstPart)

    // Get the elements from the beginning up to the rotation point
    const secondPart = arr.slice(0, d);
    console.log("2ndPart:",secondPart)


    return firstPart.concat(secondPart);
}

const d=3;
const arr = [1, 2, 3, 4, 5]

const ans=rotateLeft(d,arr);
console.log(ans)