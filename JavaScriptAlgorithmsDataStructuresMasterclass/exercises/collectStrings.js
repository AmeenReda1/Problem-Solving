let arrResult=[]
function collectStrings(obj){
    for(var key in obj){
        if(typeof(obj[key])=='string'){
            arrResult.push(obj[key])
        }
        else if(typeof(obj[key])=='object'){
            collectStrings(obj[key])
        }
        
        
    }
    return arrResult
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])