function makingAnagrams(s1: string, s2: string): number {
    // Write your code here
    let charObj:{[key:string]:number}={}
    let count=0
    for(let ele of s1){
        if(charObj.hasOwnProperty(ele))
            charObj[ele] +=1
        else 
            charObj[ele]=1
    }
    for(let ele of s2){
        if(charObj.hasOwnProperty(ele)){
            charObj[ele]-=1
            count++
        }
    }
    return (s1.length + s2.length)-(count*2)
}
console.log(makingAnagrams('absdjkvuahdakejfnfauhdsaavasdlkj','djfladfhiawasdkjvalskufhafablsdkashlahdfa'))
