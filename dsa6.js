//Compress a string by replacing consecutive repeating characters with the character and count (only if count > 1).



function stringCompConc(inp) {
    let count = null;
    let prev = '';
    let ans = ''
    for (const char of inp) {
        let curr = char;
        if (curr == prev) {
            count++

        } else {
            if (count > 1) {
                ans = ans + count
            }

            count = 1;
            ans = ans + char
        }
        prev = curr;

    }
    if (count > 1) {
        ans = ans + count
    }
    return ans;
}




const input = "aaa"
const answ = stringCompConc(input);
console.log(answ)