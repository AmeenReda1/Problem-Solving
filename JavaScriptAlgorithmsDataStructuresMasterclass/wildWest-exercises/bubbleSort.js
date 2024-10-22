function bubbleSort(arr, comparator) {
    const defualtComparator = (a, b) => a - b;
    if (typeof comparator !== 'function') {
        comparator = defualtComparator
    }
    for (let i = arr.length - 1; i > 0; i--) {
        let noSwap = true
        for (let j = 0; j < i; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                noSwap = false
            }
        }
        //if (!noSwap) break
    }
    return arr
}
console.log(bubbleSort([4, 20, 12, 10, 7, 9]))