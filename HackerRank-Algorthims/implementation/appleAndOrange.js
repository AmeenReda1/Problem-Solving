function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let countApples=0
    let countOranges=0
    for(let ele of apples){
        ele=+ele
        if(a+ele>=s &&a+ele<=t)countApples++
    }
     for(let ele of oranges){
         ele=+ele
        if(b+ele>=s &&b+ele<=t)countOranges++
    }
   console.log(countApples)
   console.log(countOranges)
}
countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6])