// // 'use strict'
// console.log(this)
// function greet(){
//     console.log('hey there')
//     console.log(this)
// }
// greet();
// let john={
//     year:1990,
//     calcAge(birthday){
//         console.log('From outer Function')
//         console.log(this.year);
//         function inner(){
//             console.log('From Inner Function')
//             console.log(this.year)
//         }
//         //inner()
//     }
// }
// john.calcAge(1990)
// // let mark={
// //     year:1985,
   
// // }
// // mark.calcAge=john.calcAge;
// // mark.calcAge(1985);

// // function test() {

// }

console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

// stack

// webApi

// macrotask

// callback