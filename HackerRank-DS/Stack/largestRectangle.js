

function largestRectangle(h) {
    // Write your code here
    let maxRec=0
    for(let i=0;i<h.length;i++){
    let currPos=i
    let rightPos=currPos+1
    let leftPos=currPos-1
    let countRight=1
    let countLeft=1
    let currentMax=0
    while(rightPos<=h.length-1){
        if(h[rightPos]>=h[currPos]){
            countRight++
            rightPos++
        }
        else{
            break
        }
    }
    
    while(leftPos>=0){
        if(h[leftPos]>=h[currPos]){
            countLeft++
            leftPos--
        }
        else{
            break
        }
    }
    if(countRight>0 && countLeft>0){
        countRight--
        currentMax=countRight*h[i]+countLeft*h[i]
        maxRec=Math.max(maxRec,currentMax)
        continue
    }
    countLeft=countLeft>1?countLeft:0
    countRight=countRight>1?countRight:0
    currentMax=countRight*h[i]+countLeft*h[i]
    maxRec=Math.max(maxRec,currentMax)
    
    }
    return maxRec
}

