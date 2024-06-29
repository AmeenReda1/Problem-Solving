"use strict";
function funnyString(s) {
    // Write your code here
    let revered = s.split('').reverse().join("");
    for (let i = 1; i < s.length - 1; i++) {
        let firstDiff = Math.abs(s.charCodeAt(i - 1) - s.charCodeAt(i));
        let secondDiff = Math.abs(revered.charCodeAt(i - 1) - revered.charCodeAt(i));
        if (firstDiff !== secondDiff)
            return 'Not Funny';
    }
    return 'Funny';
}
console.log(funnyString('bcxz'));
