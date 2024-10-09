function findRotatedIndex(arr, val) {

    let index = rotationIndex(arr);
    if (arr[index] == val) return index;
    
    let leftSideValue = binarySearch(arr, val, 0, index)
    if (leftSideValue > -1) return leftSideValue

    let rightSideValue = binarySearch(arr, val, index, arr.length - 1)
    if (rightSideValue > -1) return rightSideValue
    return -1

}
//1- fnind the rotated element index
function rotationIndex(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return mid
        }
        else if (arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) {
            start = mid
        }
        else {
            end = mid
        }
    }
    return -1;

};
//2- check if the element in smaller
function binarySearch(arr, val, start, end) {
    let left = start, right = end;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] == val) return mid;
        else if (arr[mid] > val) {
            right = mid - 1
        }
        else {
            left = mid + 1
        }
    }
    return -1;
}
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3))
