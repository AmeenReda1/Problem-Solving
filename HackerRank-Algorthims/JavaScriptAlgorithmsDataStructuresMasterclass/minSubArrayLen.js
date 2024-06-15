function minSubArrayLen(arr,target){
    let val_sum=0
    let left=0
    let minLen=Infinity
    for(let i=0;i<arr.length;i++){
        
        val_sum+=arr[i]
        
        while(val_sum>=target){
        minLen=Math.min(minLen,i-left+1)
        val_sum-=arr[left]
        left++
        }
        
    }
    return (minLen !==Infinity)?minLen:0
}