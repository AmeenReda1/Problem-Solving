"use strict";
function timeConversion(s) {
    // Write your code here
    if (s.slice(0, 2) == '12' && s[s.length - 2] == 'P') {
        return s.slice(0, -2);
    }
    else if (s.slice(0, 2) == '12' && s[s.length - 2] == 'A') {
        return '00' + s.slice(2, -2);
    }
    if (s[s.length - 2] == 'P') {
        let hours = +s.slice(0, 2) + 12;
        return hours + s.substring(2, s.length - 2);
    }
    else if (s[s.length - 2] == 'A') {
        return s.substring(0, s.length - 2);
    }
}
