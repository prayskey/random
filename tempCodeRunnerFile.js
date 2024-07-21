function firstUniqChar(s){
  let charCount = {};

  for(let char of s){
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  for(let i = 0; i < s.length; i++){
    if(charCount[s[i]] === 1){
      return s[i]
    }
    return -1
  }
}