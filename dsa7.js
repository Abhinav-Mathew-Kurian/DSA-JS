// You are given an array of characters chars.
// Compress it in-place and return the new length of the array.

// The compression rule is:

//     For consecutive repeating characters, replace them with the character + count.

//     If the count is 1, keep the character only (no "1").

//     You must do this in-place, using only O(1) extra space.

// Input:  ['a','a','b','b','c','c','c']
// Output: ['a','2','b','2','c','3'], Return: 6----think about it must be something there to track it 


function stringMani(arr) {
    let prev = '';
    let count = 0;
    let read = 0;
    let write = 0;
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i];
        if (prev == cur) {
            count++;
            read++;
        } else {
            if (count > 1) {
                let splitted = count.toString().split('');
                for (let ch of splitted) {
                    arr[write] = ch;
                    write++
                }
            }

            arr[write] = cur;
            read++;
            write++;
            count = 1;
            prev = cur;

        }

    }
    if (count > 1) {
        let splitted = count.toString().split('');
        for (let ch of splitted) {
            arr[write] = ch;
            write++;
        }
    }

    arr.splice(write)
    console.log(arr)
    return arr.length;

}






const input = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']
const answ = stringMani(input);
console.log(answ)
