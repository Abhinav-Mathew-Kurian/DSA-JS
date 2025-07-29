// frequency counter of elements in an array using objevt


function freqCounter(arr){
   const freq ={};//maping- hold values and indecies
   for(let i =0;i< arr.length ;i++){
      const element = arr[i];
      if(freq[element]){
         freq[element]++
      }else{
         freq[element]=1
      }
   }
   let maxFreq=0;
   let mostFreq=[];
   for(const key in freq){
      if(freq[key]>maxFreq){
         maxFreq= freq[key];
         mostFreq.push(key);
        
      }
   }
   console.log(freq)
   return Number(mostFreq)
}

const input =[1,2,3,3,2,2,1,1,1,2,3,1,2];
const freqArray=freqCounter(input);
console.log(freqArray);
