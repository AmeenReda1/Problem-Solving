function getDigit(number,i){
    return Math.floor(Math.abs(number)/Math.pow(10,i)%10)
}
function digitCount(number){
    return Math.floor(Math.log10(Math.abs(number)))+1
}
function mostDigit(nums){
    let maxDigits=0
    for(let i=0;i<nums.length;i++){
        maxDigits=Math.max(maxDigits,digitCount(nums[i]))
    }
    return maxDigits
}
function radixSort(arr){
    let maxDigit=mostDigit(arr)
    
    
    for(let k=0;k<maxDigit;k++){
        let buckets=Array.from({length:10},()=>[])
        
        for(let i=0;i<arr.length;i++){
            let digit=getDigit(arr[i],k)
            buckets[digit].push(arr[i])
            
        }
        arr=[].concat(...buckets)  
         console.log(buckets)
       
        
    }
    return arr

}
console.log(radixSort([4,5,3,23]))