function bubbleSort(arr){
    for(var i=arr.length;i>0;i--){
        let noSwaps=true
        for(var j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                noswaps=false
                swap(arr,j,j+1)
            }
                
        }
        if(noSwaps)break
    }
    return arr
}
function swap(arr,i,j){
    return [arr[i],arr[j]]=[arr[j],arr[i]]
}
console.log(bubbleSort([10,5,6,8,12,3]))