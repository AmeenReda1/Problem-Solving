function hackerlandRadioTransmitters(x, k) {
    // Write your code here
    let result=0
    let arr=new Array(10000000).fill(0)
    let max=Number.MIN_SAFE_INTEGER
    for(var ele of x){
        arr[ele]=1
        if(ele>max)
            max=ele
    }
    let i=1
    while(i<=max){
        if(arr[i]==1){
            if(arr[i+k]==1){
                 i=i+(2*k)+1
                result++
            }
            else{
                let pointer=i+k
                while(pointer>=i){
                    if(arr[pointer]==1){
                        i=pointer+k+1
                        result++
                        break
                    }else{
                        pointer--
                    }
                }
            }
        }else{
            i++
        }
    }
    return result
}
console.log(hackerlandRadioTransmitters([7,2,4,6,5,9,12,11],2)) 