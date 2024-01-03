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
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {
    // Write your code here
    let stack=[]
    let ending=[')','}',']']
    let starting=['(','{','[']
    if(!stack && ending.includes(s[i])){
        return 'NO'
    }
    for(let i=0;i<s.length;i++){
        if(starting.includes(s[i])){
            stack.push(s[i])
        }
        else if(ending.includes(s[i])){
            if(!stack)
                return 'NO'
            else{
                let index=ending.indexOf(s[i])
                if(starting[index] !==stack.pop()){
                    return 'NO'
                }
            }
        }

    }
    if(stack.length) return 'NO'
    else return "YES"
    
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        const result = isBalanced(s);

        ws.write(result + '\n');
    }

    ws.end();
}
