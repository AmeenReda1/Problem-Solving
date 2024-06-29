"use strict";
function beautifulBinaryString(b) {
    // Write your code here
    let count = 0;
    let index = 0;
    while (index != -1) {
        index = b.indexOf('010', index);
        if (index != -1) {
            index += 3;
            count++;
        }
    }
    return count;
}
console.log(beautifulBinaryString('0100101010'));
