// so to solve this problem of stack overflow that reduced from the memoization technique there is somthing called (Tabulation) 
function fib_table(n) {  
    if (n <= 2) return 1;
    var fibNums = [0,1,1];
    for(var i = 3;i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2]
    } 
    return res;
}
console.log(fib_table(50))