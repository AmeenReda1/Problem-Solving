function swap(arr,i,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
    
}
function bigSorting(unsorted) {
    // Write your code here using bubble sort
    for(var i=unsorted.length;i>0;i--){
        let noSwap=true
        for(var j=0;j<i-1;j++){
            
            if(unsorted[j].length>unsorted[j+1].length){
                noSwap=false
                swap(unsorted,j,j+1)
            }
            else if(unsorted[j].length==unsorted[j+1].length){
                for(var x=0;x<unsorted[j].length &&x<unsorted[j+1].length;x++){
                    if(+unsorted[j][x]>+unsorted[j+1][x]){
                        noSwap=false
                        swap(unsorted,j,j+1)
                        break
                    }else if(+unsorted[j][x]<+unsorted[j+1][x]){
                        break
                    }
                }
            }
        }
        if(noSwap)break
    }
    return unsorted
}
console.log(bigSorting(['1','2','100','200','111','3084193741082937','3084193741082938','12303479849857341718340192371']))