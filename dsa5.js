//character count----based on frequency not consequtive order


function stringComp(inp){
    const frq={}
    let ans='';
    for(const char of inp){
        if(frq[char]){
            frq[char]++
        }
        else{
            frq[char]=1;
        }
    }
    for(const key in frq){
        if(frq[key]!==1){
        ans=ans+key+frq[key]
        }
        else{
             ans=ans+key
        }
    }
    
    return ans;
}





const input ='abca';
const ans = stringComp(input);
console.log(ans)