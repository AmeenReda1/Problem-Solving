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
 * Complete the 'getMax' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY operations as parameter.
 */

function getMax(operations) {
    // Write your code here
    let theMaxElement=[]
    let result=[]
    let stack=[]
    for(let i=0;i<operations.length;i++){
        if(operations[i]=='2'){
           let targetDeleted=stack.pop()
           if(targetDeleted==theMaxElement[theMaxElement.length-1]){
               theMaxElement.pop()
           }
        }  
        else if(operations[i]=='3'){
            result.push(theMaxElement[theMaxElement.length-1])
            
        }
            
        else{
            let data=operations[i].split(' ')[1]
            data=parseInt(data)
            stack.push(data) 
            if(theMaxElement.length==0 ||theMaxElement[theMaxElement.length-1]<=data){
                theMaxElement.push(data)
            }
            
        }
        
    }
    return result
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let ops = [];

    for (let i = 0; i < n; i++) {
        const opsItem = readLine();
        ops.push(opsItem);
    }

    const res = getMax(ops);

    ws.write(res.join('\n') + '\n');

    ws.end();
}
