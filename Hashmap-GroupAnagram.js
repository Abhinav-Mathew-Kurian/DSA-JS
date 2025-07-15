// // Problem: Group Anagrams
// Given an array of strings, group the anagrams together.

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]

// Output: [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]


function groupAnagram(inp){
   const map = new Map(); 
const sortedWords = []; //to effectively debug--no use in logic.
const Output=[];
let group=[];

for (let i = 0; i < inp.length; i++) {
    let word = inp[i]; 
    const sortedWord = word.split('').sort().join('');
    map.set(inp[i],sortedWord);

    sortedWords.push(sortedWord);//to effectively debug--no use in logic.
}
const anagramGroups = new Map();
for (const [key, val] of map) {
    if (anagramGroups.has(val)) {
        anagramGroups.get(val).push(key);
    } else {
        anagramGroups.set(val, [key]);
    }
}

console.log(sortedWords);
console.log(map)
return anagramGroups;
}



const input=["eat", "tea", "tan", "ate", "nat", "bat"];
const ans=groupAnagram(input);
console.log(ans)

