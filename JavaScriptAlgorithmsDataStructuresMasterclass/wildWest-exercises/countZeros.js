// Divide and Conquer - countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

//     countZeroes([1, 1, 1, 1, 0, 0]) // 2
// countZeroes([1, 0, 0, 0, 0]) // 4
// countZeroes([0, 0, 0]) // 3
// countZeroes([1, 1, 1, 1]) // 0
// Time Complexity - O(log n)

function countZeroes(numbers) {
    // add whatever parameters you deem necessary - good luck!!!
    let left = 0;
    let right = numbers.length - 1;
    while (left <= right) {
        let mid = Math.floor(left - right / 2)

        if (numbers[mid] === 0) {
            if (mid == 0 || numbers[mid - 1] === 1) {
                return numbers.length - mid;
            }
            right = mid - 1

        }
        else {
            left = mid + 1
        }
    }
    return 0;

}