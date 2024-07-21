function pageCount(n, p) {
    if(n%2==1) n-=1
    if(p%2==1) p-=1
    let target= Math.min(n-p,p)
    return  Math.floor(target/2)
}