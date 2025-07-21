// First Unique Character in a String
// ❓ Question:
// Given a string s, return the index of the first non-repeating character.
// If there is none, return -1.

// Input:  s = "leetcode"
// Output: 0   // 'l' is the first non-repeating

// Input:  s = "loveleetcode"
// Output: 2   // 'v' is the first non-repeating

// Input:  s = "aabb"
// Output: -1  // all characters repeat.... easy with map just think of indrx counting

function firstNonRepeatStringChar(inp){
    const charCounts=new Map();
    let position=-1;
     let count=0;
      for (let i = 0; i < inp.length; i++) {
        const char = inp[i];
        charCounts.set(char, (charCounts.get(char) || 0) + 1);
    }
    for (let i=0;i<inp.length;i++){
        const char = inp[i];
        if (charCounts.get(char) === 1) {
            return i; 
        }
    }
    return -1;
}

const input = "loveleetcode";
const ans = firstNonRepeatStringChar(input);
console.log("First non repeating char position is:",ans)


