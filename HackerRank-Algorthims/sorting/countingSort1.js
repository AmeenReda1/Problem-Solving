function countingSort(arr) {
    // Write your code here
    let result=new Array(100).fill(0)
    for(let i=0;i<arr.length;i++){
        result[arr[i]]++
    }
return result

}