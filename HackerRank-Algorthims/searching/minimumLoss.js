function minimumLoss(price) {
    // Write your code here
    let minLoss=Infinity
    let indexObj={}
    for(var i=0;i<price.length;i++){
       indexObj[price[i]]=i 
    }
    price.sort((a,b)=>a-b)
    for(var i=1;i<price.length;i++){
        if(price[i]-price[i-1]< minLoss && indexObj[price[i]]<indexObj[price[i-1]]){
            minLoss=Math.min(price[i]-price[i-1],minLoss)
        }
    }
    return minLoss
}

console.log(minimumLoss([20,7,8 ,2 ,5]))