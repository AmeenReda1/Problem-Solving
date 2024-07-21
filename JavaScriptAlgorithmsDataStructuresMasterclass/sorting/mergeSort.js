function merge(arr1,arr2){
    let result=[]
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]>arr2[j]){
            result.push(arr2[j])
            j++
        }
        else{
            result.push(arr1[i])
            i++
        }
    }
    while(i<arr1.length){
        result.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        result.push(arr2[j])
        j++
    }
    return result
}
function mergeSort(){
    if(arr.length<=1) return arr
    let mid=arr.length/2
    let left=mergeSort(rr.slice(0,mid))
    let right=mergeSort(arr.slice(mid))
    return merge(left,right)
}
console.log(merge([1,2,3,4,8,10],[5,6,7,9]));