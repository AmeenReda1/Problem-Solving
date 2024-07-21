function pivot(arr,start=0,end=arr.length-1){
    let pivotIndex=start
    let pivot=arr[start]
    for(let i=start+1;i<=end;i++){
        if(pivot>arr[i]){
            pivotIndex++
            swap(arr,pivotIndex,i)
        }
    }
    swap(arr,start,pivotIndex)
    return pivotIndex
}
function swap(arr,i,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
    }
function quickSort(arr) {
    // Write your code here
    pivot(arr)
    return arr
}
