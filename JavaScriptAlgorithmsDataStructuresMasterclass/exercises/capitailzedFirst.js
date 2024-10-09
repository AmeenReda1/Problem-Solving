let newArr=[]
function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
    
    if(arr.length==0)return newArr
    else{
        let target=arr[0]
        target=target[0].toUpperCase()+target.slice(1)
        newArr.push(target)
    }
    return capitalizeFirst(arr.slice(1))
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
