function someRecursive(arr,callback){
    // add whatever parameters you deem necessary - good luck!
    if(!arr.length)return false
    if(callback(arr.pop())){
        return true
    }
    return someRecursive(arr,callback)
  }
// false
function test(val){
    return val<10
}
console.log(someRecursive([4,6,10],test)); 