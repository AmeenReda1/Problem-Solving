function balancedSums(arr) {
    // Write your code here
    let prefixSum=[]
    let prev=0
    prefixSum[0]=arr[0]
    for(var i=1;i<arr.length;i++){
        prefixSum[i]=prefixSum[i-1]+arr[i]
    }
    for(var i=0;i<prefixSum.length;i++){
        if(prefixSum[prefixSum.length-1]-prefixSum[i]==prev){
            return 'YES'
        }
        else{
            prev=prefixSum[i]
        }
    }
    return 'NO'
}