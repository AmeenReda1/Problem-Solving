"use strict";
function gemstones(arr) {
    // Write your code here
    let obj = {};
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        let arrSet = new Set(arr[i]);
        for (let value of arrSet) {
            if (obj.hasOwnProperty(value))
                obj[value] += 1;
            else
                obj[value] = 1;
        }
    }
    Object.entries(obj).forEach(([key, value]) => {
        if (value == arr.length)
            ans += 1;
    });
    return ans;
}
