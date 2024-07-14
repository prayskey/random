/*

let text = "abd-c*h&e-fg";

displayResult(reversedString(text));

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

function displayResult(result){
  console.log(result)
}


const text = "obo";

console.log(isPalindrome(text))


function isPalindrome(str){
  reverseStr = str.split("").reverse().join().replaceAll(",", "");

  if(reverseStr === str){
    return true;
  }else {
    return false;
  }
}

*/

//Longest substring without repeating characters

let s = "abcabcbb";

function longestSubstring(str){
  for(let i = 0; i < str.length; i++){
    
  }
}




/*
function factorial(n){

  let result = 1;

  if(n !== 0){
    for(let i = n; i >= 1; i--){
    result *= i;
  }
  }else {
    result = 1;
  }
  return result;
}
*/

function factorial(n) {
  if(n === 0){
    return 1
  }else{
    return n * factorial(n - 1)
  }
}


let sum = -Infinity;

console.log(new Date())


console.log(factorial(4))

window.addEventListener("load", setTimeout(()=>{
  document.body.style.backgroundColor = 'green'
}, 5000))


document.querySelector(".click").addEventListener("click", ()=>{
  document.body.style.backgroundColor = 'white'
})