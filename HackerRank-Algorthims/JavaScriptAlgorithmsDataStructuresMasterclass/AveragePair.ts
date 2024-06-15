function averagePair(arr,target){
    // add whatever parameters you deem necessary - good luck!
  let obj={}
  for(let ele of arr){
      obj[ele]=(obj[ele]||0)+1 
      if(obj[target*2-ele]){
          return true
      }
      
  }
  return false
  }