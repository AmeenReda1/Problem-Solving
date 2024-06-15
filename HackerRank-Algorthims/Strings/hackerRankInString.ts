function hackerrankInString(s: string): string {
    // Write your code here
    let temp:string='hackerrank'

    let tempPoint:number=0
    for (let i:number=0;i<s.length;i++){
        
        if(s[i]==temp[tempPoint]){
            tempPoint++
        }
        if(tempPoint==10)return "YES"
    }
    if(tempPoint==10)return  "YES"
    else return "NO"
}
