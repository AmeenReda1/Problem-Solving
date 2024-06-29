function insertionSort2(n, arr) {
    // Write your code here
    for(var i=1;i<n;i++){
        let currentVal=arr[i]
         
        for(var j=i-1;j>=0 && arr[j]>currentVal;j--){
            arr[j+1]=arr[j]
        }
        arr[j+1]=currentVal
        console.log(arr.join(' '))
    } 
    

}
insertionSort2(5,[9,8,7,10,4])