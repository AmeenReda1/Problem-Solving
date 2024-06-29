function missingNumbers(arr, brr) {
    // Write your code here
    let numObj={}
    let resultArr=[]
    for(var i=0;i<arr.length;i++){
        if(numObj.hasOwnProperty(arr[i])){
            numObj[arr[i]]+=1
        }else{
            numObj[arr[i]]=1
        }
    }
    for(var i=0;i<brr.length;i++){
        if(numObj.hasOwnProperty(brr[i])){
            numObj[brr[i]]-=1
        }else{
            numObj[brr[i]]=-1
        }
    }
   
    Object.entries(numObj).forEach(([key,value])=>{
        if(value !=0)resultArr.push(key)
    })
    resultArr.sort((a,b)=>a-b)
    return resultArr

}