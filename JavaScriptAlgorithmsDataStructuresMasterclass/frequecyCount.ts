function sameFrequency(num1,num2){
    // good luck. Add any arguments you deem necessary.
    let freqCount={}
    for(let num of String(num1)){
        freqCount[num]=freqCount[num]?freqCount[num]+1:1

    }
    for(let val of String(num2)){
        if(!freqCount[val]){
            return false
        }
        freqCount[val]-=1
       
    }
    return true
  }