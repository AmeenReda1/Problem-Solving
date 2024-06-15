function separateNumbers(s: string): void {
    // Write your code here
    if(s[0])console.log('No')
    
    let current=s[0]
    let slice=1
    let find=+current+1
    let index=0
    let flag=false
    while(!flag && index<s.length){
            let sub=s.slice(index+1,index+String(find).length)
            if(+sub==find){
                current=sub
                flag=true
            }
            else{
                slice++
                current=s.slice(0,slice)
                find=+current+1
                index=current.length-1
            }
    }
    if(flag){
        while(index<=s.length){
            let sub=s.slice(index,String(find).length)
            if(+sub!==find){
                console.log('No')
                return
            }
            find=find+1
            index+=String(find).length
        
        }
        if(flag){
            console.log('YES ',current)
        }
    }
    else{
        console.log('NO')
    }


}
separateNumbers('99910001001')