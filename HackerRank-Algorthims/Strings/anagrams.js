"use strict";
function anagram(s) {
    // Write your code here
    if (s.length % 2 == 1)
        return -1;
    let subOne = s.substr(0, s.length / 2);
    let subTwo = s.substr(s.length / 2, s.length);
    let count = 0;
    let obj = {};
    for (let i = 0; i < subOne.length; i++) {
        if (obj.hasOwnProperty(subOne[i]))
            obj[subOne[i]] += 1;
        else
            obj[subOne[i]] = 1;
    }
    for (let ele of subTwo) {
        if (obj[ele]) {
            obj[ele] -= 1;
        }
        else
            count++;
    }
    return count;
}
