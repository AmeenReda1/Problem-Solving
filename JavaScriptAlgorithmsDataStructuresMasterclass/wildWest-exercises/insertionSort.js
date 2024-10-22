function insertionSort(arr, comparator) {
    const defualtComparator = (a, b) => a - b;
    if (typeof comparator !== 'function') {
        comparator = defualtComparator;
    }
    for (let i = 1; i < arr.length; i++) {
        const currentVal = arr[i]
        for (var j = i - 1; j >= 0 && comparator(arr[j], currentVal)>0; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;

    }
    return arr
}
console.log(insertionSort([2, 1, 9, 67, 4]))