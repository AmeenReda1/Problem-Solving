function pangrams(s: string): string {
    // Write your code here
    let arr:{[key:string]:number}={}
    let asciVal
    let count=0
    s=s.toLowerCase()
    for(let val of s){
        if(val ==' ')continue
        else
          if(!arr.hasOwnProperty(val))arr[val]=1    
        
    }
   if(Object.keys(arr).length==26)
   
    return 'pangram'
    else return 'not pangram'
}
pangrams('We promptly judged antique ivory buckles for the next prize')