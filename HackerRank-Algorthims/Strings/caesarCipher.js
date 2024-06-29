"use strict";
function caesarCipher(s, k) {
    let plain = s.split("");
    let res = "";
    plain.forEach((l) => {
        let asci = l.charCodeAt(0);
        if (asci >= 65 && asci <= 90) {
            asci = ((asci + k - 65) % 26) + 65;
        }
        if (asci >= 97 && asci <= 122) {
            asci = ((asci + k - 97) % 26) + 97;
        }
        res += String.fromCharCode(asci);
    });
    return res;
}
console.log(caesarCipher("middle-Outz", 2));
