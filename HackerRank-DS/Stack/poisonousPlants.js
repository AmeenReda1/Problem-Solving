function splitToLists(p){
    let lists=[]
    let temp=[]
    for(let i=0;i<p.length;i++){
        if(temp.length==0){
            temp.push(p[i])
        }
        else{
            if(temp[temp.length-1]<p[i]){
                lists.push(temp)
                temp=[]
                temp.push(p[i])
            }
            else{
                temp.push(p[i])
            }
        }
    }
    if(temp.length>0){
        lists.push(temp)
    }
    return lists
}
function mergeLists(lists){
    let resultList=[lists[0]]
    for(let i=1;i<lists.length;i++){
        let currentList=lists[i]
        if(currentList.length==0){
            continue
        }
        else{
          
            let lastList=resultList[resultList.length-1]
            let copyLast=lastList
            let lastItem=lastList[lastList.length-1]
            if(lastItem>=currentList[0]){
                for(let j=0;j<currentList.length;j++){
                    copyLast.push(currentList[j])
                }
                resultList.pop()
                resultList.push(copyLast)  
            }     
            else{
                if(currentList.length==1){
                    resultList.push([currentList])
                }
                else{
                    resultList.push(currentList)
                }    
            }
        }
    }
    return resultList
}
function poisonousPlants(p) {
    // Write your code here
    let days=0
    let lists=splitToLists(p)
    while(lists.length>1){
        for(let i=1;i<lists.length;i++){
            if(lists[i])
                lists[i].shift()
        }
        days++
        lists=mergeLists(lists)
    }
    return days
}

l =[6,5,8,4,7,9]
let res=poisonousPlants(l)
console.log(res)
