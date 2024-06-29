"use strict";
function marsExploration(s) {
    let count = 0;
    // Write your code here
    for (let i = 0; i < s.length; i += 3) {
        const string = s.slice(i, i + 3);
        if (string === "SOS") {
            continue;
        }
        if (string[0] !== "S")
            count += 1;
        if (string[1] !== "O")
            count += 1;
        if (string[2] !== "S")
            count += 1;
    }
    return count;
}
marsExploration('SOSSOT');
