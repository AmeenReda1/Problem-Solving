

function twoStacks(maxSum, a, b) {
    // Write your code here
    
    // start solving the problem
    let aPoint=0
    let bPoint=0
    let resultCount=0
    let sum=0
    while(aPoint<a.length){
        if(sum+a[aPoint]>maxSum){
            break
        }
        sum+=a[aPoint]
        aPoint++
        
    }
    resultCount=aPoint
    while(bPoint<b.length){
        sum+=b[bPoint]
        bPoint++
        while(sum>maxSum && aPoint>0){
            sum-=a[aPoint-1]
            aPoint--;
        }
        if(sum<=maxSum &&resultCount<aPoint+bPoint){
            resultCount=aPoint+bPoint
        }
    }
    
   
    
    return resultCount
}


