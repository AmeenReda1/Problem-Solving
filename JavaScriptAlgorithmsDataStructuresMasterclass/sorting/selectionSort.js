function selectionSort(arr){
    for(var i=0;i<arr.length;i++){
        var lowest=i 
        for(var j=i+1;j<arr.length;j++){
            if(arr[j]<arr[lowest]){
                lowest=j
            }
        }
        let temp=arr[i]
        arr[i]=arr[lowest]
        arr[lowest]=temp
        console.log(arr)
    }
    return arr
}
selectionSort([2,4,5,3,8,7,9])