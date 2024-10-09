function flatten(arr){
  // add whatever parameters you deem necessary - good luck!
 let result=[]
 let helper=input=>{
    if(input.length==0) return 
    else{
        if(typeof input[0]==='number'){
            result.push(input[0])
        }
        else if (input[0] instanceof Array){
                helper(input[0])
            }
        }
        helper(input.slice(1))
    }
 helper(arr)
 return result
}
let res=flatten([1, [2, [3, 4], [[[5, 6]]], [7, [[[[9]]]]]]])
console.log(res)