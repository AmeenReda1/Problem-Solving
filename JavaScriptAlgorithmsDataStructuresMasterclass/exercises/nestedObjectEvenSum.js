function nestedEvenSum (input) {
    // add whatever parameters you deem necessary - good luck!
      let num=0
      function helper(obj){
        Object.values(obj).forEach(val=>{
            
            if(typeof val == 'number' && val % 2 == 0)
                  num+=val
                  
            if(val instanceof Object){
                helper(val)
            }
            
        })  
      }
      helper(input)
    return num
  }

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10