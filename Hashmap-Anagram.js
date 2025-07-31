//  Problem 1: Valid Anagram easy just need 2 functions that's all

// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false
// ❗ Constraint:
// Two strings are anagrams if they have the same characters with same frequency.
function mapAreEqual(map1,map2){
    if (map1===map2){
        return true;
    }
    else if(map1.size !== map2.size){
        return false;
    }
    else{
        for(const [key,val] of map1){
            if (!map2.has(key) || val !== map2.get(key)) {
            return false;
        }
        }
        return true;
    }
}

function anagramChecker(inp1,inp2){
    const map1 = new Map();
    const map2 =new Map();

    for(let char of inp1){
        if(map1.has(char)){
            map1.set(char,map1.get(char)+1)
        }else{
            map1.set(char,1)
            
        }
    }
     for(let char of inp2){
        
        if(map2.has(char)){
            map2.set(char,map2.get(char)+1)
        }else{
            map2.set(char,1)
            
        }
    }
        console.log("MAP 1:",map1)
        console.log("MAP 2:",map2)

      let answer= mapAreEqual(map1,map2)

    return answer;
}




const input1 = "anagram";
const input2 = "nagaram";


const ans = anagramChecker(input1,input2)
console.log(ans)