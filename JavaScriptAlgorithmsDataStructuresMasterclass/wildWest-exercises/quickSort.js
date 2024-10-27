function pivot(arr, comparator, start = 0, end = arr.length - 1) {
    const defualtComparator = (a, b) => a - b;
    if (typeof comparator !== 'function') {
        comparator = defualtComparator
    }
    let pivot = arr[start]
    let swapIdx = start
    for (let i = start + 1; i <= end; i++) {
        if (comparator(pivot, arr[i]) > 0) {
            swapIdx++;
            swap(arr, i, swapIdx)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
function quickSort(arr, comparator, left = 0, right = arr.length - 1) {
    // good luck!
    if (left < right) {
        let pivotIndex = pivot(arr, comparator, left, right)
        quickSort(arr, comparator, left, pivotIndex - 1)
        quickSort(arr, comparator, pivotIndex + 1, right)
    }
    return arr;

}









