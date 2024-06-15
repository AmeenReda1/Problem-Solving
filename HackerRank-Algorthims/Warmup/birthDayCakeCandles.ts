function birthdayCakeCandles(candles: number[]): number {
    // Write your code here
    let maxHeight=0
    let maxCount=0
    for(let i=0;i<candles.length;i++){
        if(candles[i]>maxHeight){
            maxCount=1
            maxHeight=candles[i]
        }
            
        else if(candles[i]==maxHeight){
            maxCount++
        }
    }
     return maxCount   
}
console.log(birthdayCakeCandles([3,2,1,3]))