'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */
function containsNumber(str) {
  return /\d/.test(str);
}
function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
     let count = 0;

    // Check each criteria and increment count if not met
    

    if (!/[a-z]/.test(password)) {
        count++;
    }

    if (!/[A-Z]/.test(password)) {
        count++;
    }

    if (!/\d/.test(password)) {
        count++;
    }

    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
        count++;
    }
    
    if(count+n<6){
        count+=6-(count+n)
    }
    return count
    
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const password = readLine();

    const answer = minimumNumber(n, password);

    ws.write(answer + '\n');

    ws.end();
}
