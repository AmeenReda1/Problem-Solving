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
 * Complete the 'equalStacks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h1
 *  2. INTEGER_ARRAY h2
 *  3. INTEGER_ARRAY h3
 */
function getSum(arr){
    let sum=0,i=0
    while(i<arr.length){
        sum+=arr[i]
        i++
    }
    return sum
}
function checkEqulatity(sum1,sum2,sum3){
    if(sum1==sum2 &&sum1==sum3)
        return sum1
    return -1    
}
function equalStacks(h1, h2, h3) {
    // Write your code here
    let sumH1=getSum(h1)
    let sumH2=getSum(h2)
    let sumH3=getSum(h3)
    let maxSum=Math.max(sumH1,sumH2,sumH3)
    
    let ans=checkEqulatity(sumH1,sumH2,sumH3)
    while(ans==-1){
        
    while(maxSum==sumH1){
        let deletedElement=h1.shift()
        sumH1-=deletedElement
        maxSum=Math.max(sumH1,sumH2,sumH3)
       
        ans=checkEqulatity(sumH1,sumH2,sumH3)
        if(ans!==-1)
            return ans
    }
    while(maxSum==sumH2){
        let deletedElement=h2.shift()
        sumH2-=deletedElement
        maxSum=Math.max(sumH1,sumH2,sumH3)
        
        ans=checkEqulatity(sumH1,sumH2,sumH3)
        if(ans!==-1)
            return ans
    }
    while(maxSum==sumH3){
        let deletedElement=h3.shift()
        sumH3-=deletedElement
        maxSum=Math.max(sumH1,sumH2,sumH3)
        ans=checkEqulatity(sumH1,sumH2,sumH3)
        if(ans!==-1)
            return ans
    }
    }
    return ans

    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n1 = parseInt(firstMultipleInput[0], 10);

    const n2 = parseInt(firstMultipleInput[1], 10);

    const n3 = parseInt(firstMultipleInput[2], 10);

    const h1 = readLine().replace(/\s+$/g, '').split(' ').map(h1Temp => parseInt(h1Temp, 10));

    const h2 = readLine().replace(/\s+$/g, '').split(' ').map(h2Temp => parseInt(h2Temp, 10));

    const h3 = readLine().replace(/\s+$/g, '').split(' ').map(h3Temp => parseInt(h3Temp, 10));

    const result = equalStacks(h1, h2, h3);

    ws.write(result + '\n');

    ws.end();
}
