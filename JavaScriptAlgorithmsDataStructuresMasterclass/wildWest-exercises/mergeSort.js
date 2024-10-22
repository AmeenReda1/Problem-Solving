function merge(arr1, arr2, comparator) {
    const defualtComparator = (a, b) => a - b;
    if (typeof comparator !== 'function') {
        comparator = defualtComparator
    }
    let result = []
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (comparator(arr1[i] , arr2[j])>0) {
            result.push(arr2[j])
            j++
        }
        else {
            result.push(arr1[i])
            i++
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result
}

function mergeSort(arr, comparator) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    let result = merge(left, right, comparator)
    return result

}
console.log(mergeSort([5, 9, 4, 10]))
