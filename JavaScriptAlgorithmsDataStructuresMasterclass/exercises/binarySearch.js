function binarySearch(arr,target){
    // add whatever parameters you deem necessary - good luck!
    let left=0
    let right=arr.length-1
    let mid=Math.ceil(arr.length /2)
    while(left<=right){
        if(arr[mid]==target){
            return  mid
        }
        else if(arr[mid]>target){
            right=mid-1
            mid=Math.ceil((left + right) / 2);
        }
        else {
            left = mid + 1;
            mid = Math.ceil((left + right) / 2);
        }
    }
    return -1
  }
console.log(binarySearch([1,2,3,4,5,6],5))  