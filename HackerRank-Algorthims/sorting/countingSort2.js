function countingSort(arr) {
    // Write your code here
    let result=new Array(100).fill(0)
    let answer=[]
    for(let i=0;i<arr.length;i++){
        result[arr[i]]+=1
    }
    for(let i=0;i<result.length;i++){
        if(result[i])
        answer.push((i+" ").repeat(result[i]).trimEnd())
    }
    return answer

}