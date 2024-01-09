// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function (inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function () {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /*
//  * Complete the 'poisonousPlants' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts INTEGER_ARRAY p as parameter.
//  */

// function processData(input) {
//     // Input parsing
//     input = input.split('\n');
//     input.shift(); //n
//     var plants = input.shift().split(' ').map(p=>parseInt(p));
    
//     //Solution
//     var maxDaysAlive = 0;
//     var stack = [];
//     // We keep in the stack the possible
//     // killers for plants that we haven't seen yet.
    
//     for (var i = 0; i < plants.length; i++){
//         var daysAlive = 0; 
//         // Number of days the plant[i] will survive

//         while(stack.length > 0 && plants[i] <= stack[stack.length - 1].plant)
//             daysAlive = Math.max(daysAlive, stack.pop().days); 
//         // The daysAlive for plant[i] is the max
//         // days of all the plants greater than plant[i]
//         // that are in the stack (possible killers) because
//         // they all need to die before plant[i] dies.
//         // Later we add 1 because it dies after the
//         // other plants have died.
        
        
//         // when plant[i] is the minimum seen until now.
//         // It will never die.
//         if (stack.length === 0) 
//             daysAlive = 0;
            
            
//         // plant[i] will die, because it exited the while
//         // loop and a lower plant was found
//         else 
//             daysAlive += 1;
        
//         maxDaysAlive = Math.max(maxDaysAlive, daysAlive);
        
//         // plant[i] is a possible killer because there 
//         // may be plants greater than this that we have 
//         // not seen yet
//         stack.push({ 
//             plant: plants[i],
//             days : daysAlive
//         });
//     }
//     console.log(maxDaysAlive);
// }

function poisonousPlants(p) {
    // Write your code here
    
    var stack = [];
    let maxDaysAlive = 0;
    // We keep in the stack the possible
    // killers for plants that we haven't seen yet.
    
    for (let i = 0; i < p.length; i++){
        let daysAlive = 0; 
        // Number of days the plant[i] will survive

        while(stack.length > 0 && p[i] <= stack[stack.length - 1].plant)
            daysAlive = Math.max(daysAlive, stack.pop().days); 
        // The daysAlive for plant[i] is the max
        // days of all the plants greater than plant[i]
        // that are in the stack (possible killers) because
        // they all need to die before plant[i] dies.
        // Later we add 1 because it dies after the
        // other plants have died.
        
        
        // when plant[i] is the minimum seen until now.
        // It will never die.
        if (stack.length === 0) 
            daysAlive = 0;
            
            
        // plant[i] will die, because it exited the while
        // loop and a lower plant was found
        else 
            daysAlive += 1;
        
        maxDaysAlive = Math.max(maxDaysAlive, daysAlive);
        
        // plant[i] is a possible killer because there 
        // may be plants greater than this that we have 
        // not seen yet
        stack.push({
            plant: p[i],
            days : daysAlive
        });
    }
    // console.log(maxDaysAlive);
    
    // let i = 0;
    // let finished = false;
    // while (finished !== true) {
    //     let plants = p.slice(i).filter((e, index) => e > p[i]);
    //     if (plants.length === 0 && p.lastIndexOf(p[0]) !== 0) {
    //         plants.push(p[0]);
    //     }

    //     if (plants.length > 0) {
    //         plants = plants.filter((item, index) => item >= plants[0])
    //         p = p.filter((item) => !plants.includes(item));
    //         maxDaysAlive++;
    //     } else {
    //         finished = true;
    //     }
    //     i++;
    //     console.log(plants);
    // }

    // console.log(p);
    return maxDaysAlive;
}
let=l=[6,5,8,4,7,10,9]
let result=poisonousPlants(l)
console.log(result)


