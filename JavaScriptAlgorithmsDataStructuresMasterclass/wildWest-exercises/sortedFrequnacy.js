// Divide and Conquer - sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2) // 4 
// sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3) // 1 
// sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1) // 2 
// sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4) // -1
// Time Complexity - O(log n)
function sortedFrequency(numbers, target) {
    let left = 0;
    let right = numbers.length-1;
    while(left <= right){
        if(numbers[left] < target) left++;
        else if(numbers[right] > target) right--;
        else if(numbers[left] == numbers[right] && numbers[right] == target) return right- left + 1
    }
    return -1;
}