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
 * Complete the 'waiter' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY number
 *  2. INTEGER q
 */
function sieveOfEratosthenes(n) {
    const primes = new Array(n + 1).fill(true);
    primes[0] = primes[1] = false;

    const primeNumbers = [];
    for (let p = 2; p <= n; p++) {
        if (primes[p] === true) {
            primeNumbers.push(p);
            for (let i = p * p; i <= n; i += p) {
                primes[i] = false;
            }
        }
    }

    return primeNumbers;
}


function waiter(number, q) {
    // Write your code here
    const numberOfPrimes = 1200;
    const primeList = sieveOfEratosthenes(12000);
    const first1200Primes = primeList.slice(0, numberOfPrimes);
    let answer=[]
    let a1=[]
    let b1=[]
    for(let i=0;i<q;i++){
        while(number.length>0){
            let temp=number.pop()
            if(temp%first1200Primes[i]==0){
                b1.push(temp)
            }
            else{
                a1.push(temp)
            }
        }
        answer=answer.concat(b1.reverse())
        b1=[]
        number=[...a1]
        a1=[]
    }
    
    answer=answer.concat(number.reverse())
    
    return answer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const q = parseInt(firstMultipleInput[1], 10);

    const number = readLine().replace(/\s+$/g, '').split(' ').map(numberTemp => parseInt(numberTemp, 10));

    const result = waiter(number, q);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
