function miniMaxSum(arr: number[]): void {
    // Write your code here
    let min=arr[0]
    let max=arr[0]
    let sum=arr[0]
    for(let i=1;i<arr.length;i++){
        sum+=arr[i]
        if(min>arr[i]){
            min=arr[i]
        }
        else if(max<arr[i]){
            max=arr[i]
        }
    }
    let first=sum-max
    let second=sum-min
    console.log(first,second)
}