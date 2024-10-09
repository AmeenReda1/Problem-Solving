function areThereDuplicates(...arg) {
    // good luck. (supply any arguments you deem necessary.)
     
    arg.sort()
    for(let i=1;i<arg.length;i++){
        console.log(arg[i-1])
        if(arg[i]==arg[i-1])return true
    }
    return false
}
console.log(areThereDuplicates('a', 'b', 'c', 'a'))