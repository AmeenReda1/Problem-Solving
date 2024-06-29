"use strict";
function makingAnagrams(s1, s2) {
    // Write your code here
    let charObj = {};
    let count = 0;
    for (let ele of s1) {
        if (charObj.hasOwnProperty(ele))
            charObj[ele] += 1;
        else
            charObj[ele] = 1;
    }
    for (let ele of s2) {
        if (charObj.hasOwnProperty(ele)) {
            charObj[ele] -= 1;
            count++;
        }
    }
    return (s1.length + s2.length) - (count * 2);
}
console.log(makingAnagrams('absdjkvuahdakejfnfauhdsaavasdlkj', 'djfladfhiawasdkjvalskufhafablsdkashlahdfa'));
