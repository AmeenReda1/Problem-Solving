function diagonalDifference(arr: number[][]): number {
    // Write your code here
    let firstD=0
    let secondD=0
     
    for(let i=0;i<arr.length;i++){
        firstD+=arr[i][i];
        secondD+=arr[i][arr.length-1-i];
    
    }
    return Math.abs(firstD-secondD)

}

let arr=[[11,2,4],[4 ,5 ,6],[10,8,-12]]
console.log(diagonalDifference(arr))