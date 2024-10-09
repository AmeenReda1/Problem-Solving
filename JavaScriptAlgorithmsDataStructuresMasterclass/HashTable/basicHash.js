// This is the basic Hash Function but this function make some collision (may be two words or more get the same index)
function hash(key,arrayLen){
    let total = 0;
    let WEIRED_PRIME = 31;
    for(let i=0;i<Math.min(key.length,100);i++){        
        let char = key[i];
        let value = char.charrCodeAt(0)-96
        total = (total * WEIRED_PRIME + value) % arrayLen
    }
    return total
}