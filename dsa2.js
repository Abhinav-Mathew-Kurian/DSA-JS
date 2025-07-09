


function freqCounter(arr){
   const freq ={};
   for(let i =0;i< arr.length ;i++){
      const element = arr[i];
      if(freq[element]){
         freq[element]++
      }else{
         freq[element]=1
      }
   }
   let maxFreq=0;
   let secondMostFreq=null;
   let theNumber=null;
   const sortArr=[];
   for(const key in freq){
      sortArr.push(freq[key])
      if(freq[key]>maxFreq){
         
         maxFreq= freq[key];
         
      }
   }
   console.log("sortarray:",sortArr)
   console.log(freq)
   const sortedArray=sortArr.sort((a,b)=>b-a)
   secondMostFreq=sortedArray[1];
   theNumber=freq[secondMostFreq]
   return Number(theNumber)
}

const input =[1,2,3,3,2,2,1,1,1,2,3,1,8,7,5,2,4,5,2,9,1,3,4,6,7,4,6,7,1,1,3,5,7,2];
const freqArray=freqCounter(input);
console.log(freqArray);