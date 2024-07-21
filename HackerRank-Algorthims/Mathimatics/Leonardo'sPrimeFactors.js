function primeCount(n) {
    // Write your code here
    console.log(n)
    n=BigInt(n)
    if(n==1)return 0
    let primes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53]
    let result=1
    let comulative=2
    for(let i=1;i<primes.length;i++){
        if(BigInt(primes[i])*BigInt(comulative)<=BigInt(n)){
           comulative = primes[i] * comulative
            result++
        }
        else{
            return result
        }
    }
}