function selectionSort(arr, comparator) {
    const defualtComparator = (a, b) => a - b;
    if (typeof comparator !== 'function') {
        comparator = defualtComparator
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (comparator(arr[i], arr[j]) > 0) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr;
}
console.log(selectionSort([4, 20, 12, 10, 7, 9]))