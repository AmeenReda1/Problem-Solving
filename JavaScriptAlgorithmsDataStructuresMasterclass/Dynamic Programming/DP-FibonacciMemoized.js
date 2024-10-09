// memoization is a technique of dynamic programming to make the code faster and to reduce recalculation of the code
// using memoization as strategy to memorize and store the result of this number 

function fib(n,memo=[]){
    if(memo[n] !== undefined) return memo[n];
    if(n<=2) return 1;
    var res = fib(n-1,memo)+ fib(n-2,memo);
    memo[n] = res;
    return res;
}
// console.log(fib(1000))
// note if you try to make fib(10000) or greater number it will lead to stack over flow becuase there is alot of unresolved recusion call in the call stack
// so to solve this problem there is somthing called (Tabulation) 
function fib_table(n) {  
    if (n <= 2) return 1;
    var fibNums = [0,1,1];
    for(var i = 3;i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2]
    } 
    return res;
}
console.log(fib_table(50))