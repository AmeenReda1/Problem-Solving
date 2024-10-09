function fib(n){
    if(n<=2) return 1;
    return fib(n-1) + fib(n-2)
}
// very slow becuase it each time it recalculate all number form the beginnning 