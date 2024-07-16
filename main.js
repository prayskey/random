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


//Longest substring without repeating characters

let s = "abcabcbb";

function longestSubstring(str){
  for(let i = 0; i < str.length; i++){
    
  }
}


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

let firstName = " shkj prayskey", lastName= "ogbonna";


const class1 = new Array("spongebob", "squarepants", "patrick")
const new_array = new Array("prayskey", "ogbonna")
const array = new_array.slice()

new_array.push(...class1)


console.log(new_array)
console.log(array)
console.log(new_array.splice(0, 1))

let sunny = 39;

console.log(sunny > 38?"The weather is sunny!!!":"The temperature is ok!!!")

let num = 123456.789

num = num.toLocaleString("en-us", {style:"unit", unit:"celsius"})

console.log(new Date().toLocaleString())
console.log(num)

let num_arr = new Array(2, 3, 4, 5, 6)

let cube_num_arr = num_arr.map(num => {
  return Math.pow(num, 3)
})
console.log(num_arr)
console.log(cube_num_arr)


const greaterNum = cube_num_arr.filter(num => {
  if(num >= 30) return num;
})

console.log(greaterNum)

class Car{
  static noOfCars = 0;

  constructor(model){
      this.model = model;
      Car.noOfCars++;
  }
  hurt(){
    console.log("You stopped the car")
  }

  drive(){
    console.log("You drive the car!!")
  }
}


const car1 = new Car("Benz")
const car2 = new Car("Lexus")
const car3 = new Car("Ferrari")

console.log(Car.noOfCars)

const promise = new Promise((resolve, reject) =>{
  let fileLoaded = false;

  if(fileLoaded){
    resolve ("File Loaded!")
  }else {
    reject("File NOT Loaded!")
  }
})

promise.then(msg => console.log(msg))
       .catch(errMsg => console.error(new Error(errMsg)) )


async function loadFile(){
let fileLoaded = false;

  if(fileLoaded){
    return ("File Loaded!")
  }else {
    throw("File NOT Loaded!")
  }
}

loadFile().then(value => console.log(value))
          .catch(errMsg => console.error(new Error(errMsg)))
   

async function loadFile(){
  let fileLoaded = false;
  
    if(fileLoaded){
      return ("File Loaded!")
    }else {
      throw new Error(("File NOT Loaded!")) 
    }
  }
            
async function fetchData(){
  try{
    let msg = await loadFile();
    console.log(msg)
  }catch(err){
    console.error(err)
  }
}

fetchData()

      

const myArr = new Array(2, 34, 23, 29, 'baccoon', 15);

if(myArr.some(element =>{
  return element > 60
})){
  console.log("It works")
}      

*/

const myArr =  new Array("Banana", "Pine-apple", "Orange", "Melon")


const new_obj = {
  firstName:"Prayskey",
  lastName:"Ogbonna"
}
 class Car{
  constructor(model, color){
    this.model = model;
    this.color = color;
  }
 }

const car1 = new Car("Ferrari", "gold")
const car2 = new Car("Bugatti", "silver")

console.log(car2.model)
console.log(car2.color)

console.log(car2 instanceof Car)


const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter}
 
})();

add();
add();
add();


