function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!
    if(str.length<=1)return true

    if(str[0] !==str[str.length-1]) return false
    
    
    return isPalindrome(str.substring(1,str.length-1))
  }
console.log(isPalindrome('amanaplanacanalpandemonium'))

