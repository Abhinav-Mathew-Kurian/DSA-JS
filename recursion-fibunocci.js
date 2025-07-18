// recursion fibunocci
function fibunocci(n){
    if(n<=1 )return n;
    return fibunocci(n-1) + fibunocci(n-2)
}




console.log(fibunocci(6))

