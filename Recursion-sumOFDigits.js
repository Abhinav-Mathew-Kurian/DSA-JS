// Sum of Digits rescursion
function sumDigits(n){
    if(n===0)return 0;
return n%10+sumDigits(Math.floor(n/10))
}
console.log(sumDigits(12345))