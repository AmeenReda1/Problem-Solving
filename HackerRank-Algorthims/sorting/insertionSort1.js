function insertionSort1(n, arr) {
    // Write your code here
    for(var i=1;i<arr.length;i++){
        let currentVal=arr[i]
        for(var j=i-1;j>=0 && arr[j]>currentVal;j--){
            
            arr[j+1]=arr[j]
          console.log(arr.join(' '))
        }
        arr[j+1]=currentVal
        
    } 
    console.log(arr.join(' '))

}