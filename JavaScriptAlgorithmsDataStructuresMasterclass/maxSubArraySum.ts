function maxSubarraySum(arr:number[],num:number){
    // add whatever parameters you deem necessary - good luck!
    let temp=0
    let max=0
    if(arr.length<num)return null
    for(let i=0;i<num;i++){
       temp+=arr[i]
    }
    max=temp
    
    if(arr.length==num)return max
    for(let i=num;i<arr.length;i++){
        temp=temp-arr[i-num]+arr[i]
        max=Math.max(temp,max)
    }
    return max
}   
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))