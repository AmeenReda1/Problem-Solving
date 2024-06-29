"use strict";
function hackerrankInString(s) {
    // Write your code here
    let temp = 'hackerrank';
    let tempPoint = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == temp[tempPoint]) {
            tempPoint++;
        }
        if (tempPoint == 10)
            return "YES";
    }
    if (tempPoint == 10)
        return "YES";
    else
        return "NO";
}
