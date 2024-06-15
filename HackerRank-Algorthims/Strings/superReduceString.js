function superReducedString(s){
    // Write your code here
    let p1=0
    let p2=1
   
    while(true){
         if(s.length==1 || p1>=s.length)return s?s:'Empty String'
        if(s[p1]==s[p2]){
            if(p1==0){
                s=s.slice(p2+1,s.length)
            }
            else{
                s=s.slice(0,p1)+s.slice(p2+1,s.length)
            }
            p1=0
            p2=1
        }
        else{
            p1+=1
            p2+=1
            continue
        }
        
    }

}
console.log(superReducedString('aaabccddd'))