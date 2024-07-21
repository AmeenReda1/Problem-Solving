// pivot helper function
function pivot(arr,start=0,end=arr.length-1){
    var  pivot=arr[start]
    var swapIdx=start;
    for(var i=start+1;i<=end;i++){
        if(pivot>arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i)
        }
    }
    swap(arr,start,swapIdx)
    return  swapIdx
    
}
function swap(arr,i,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}
function quickSort(arr,left=0,right=arr.length-1){
    
    if(left<right){
        let pivotIndex=pivot(arr,left,right)
        // handle left hand side
        quickSort(arr,left,pivotIndex-1);
        // handle right hand side
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
    
}
console.log(quickSort([4,6,9,1,2,5]))
//[4,8,2,1,5,7,6,3]


