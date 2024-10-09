function findLongestSubstring(str){
    // add whatever parameters you deem necessary - good luck!
    let count=0
    let obj={}
    let len=0
    let right=0
    let left=0
    while(right<str.length){

        if(obj.hasOwnProperty(str[right])){

            len=Math.max(len,right-left+1)
            delete obj[str[left]]
            left++
            obj={}

        }
        else{
           obj[str[right]]=1
           right++
        }
    }
    return len

}

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }

