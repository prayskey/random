let text = "abd-c*h&e-fg";

reversedString(text);

function reversedString(str){

let alphabets = str.match(/[a-zA-Z]/g);
let reversedAlphabets = alphabets.sort().reverse();
let currentIndex = 0;
let result = ""

for(let i = 0; i < str.length; i++){
  if(str[i].match(/[a-zA-Z]/g)){ //checks if the character is an alphabet
    result += reversedAlphabets[currentIndex];
    currentIndex++;
  }else {
    result += str[i] //put the original string if character is NOT alphabet
  }
  }

  return result;
}
