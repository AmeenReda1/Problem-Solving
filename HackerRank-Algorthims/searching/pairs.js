function pairs(k, arr) {
    // Write your code here
    let obj={}
    let count=0
    for(var ele of arr){
        if(obj.hasOwnProperty(ele)){
            obj[ele]+=1
        }
        else{
            obj[ele]=1
        }
    }
    for(var ele of arr){
        if(obj.hasOwnProperty(ele-k))
            count++
    }
    return count
}