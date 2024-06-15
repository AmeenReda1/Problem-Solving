function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length==0)return 0
    let i=0,j=0;
    while(j<arr.length){
        if(arr[i]==arr[j])
        j++
    else{
        i++;
        arr[i]=arr[j]
    }
    }
    return i+1
}
countUniqueValues([1,2,3,4,5,5])