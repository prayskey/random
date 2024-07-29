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


let text = "How are you doing today"

// /e/.test("The best things in life are free!")



*/


//const inputObj = document.querySelector(".input-element");

//const btn = document.querySelector(".check");

/*

btn.addEventListener("click", ()=>{
  if(inputObj.checkValidity() !== true){
    console.log(`validation message:${input.validationMessage}`);
  }
}, true) 


*/


/*


async function fetchData(){
  try{
    const response = await fetch("URL");
    if(!response.ok){
      throw new Error("Failed to load resource")
    } return response;
  }
  catch{

  }
}


try{
  const response = await fetch("url");
  const
}



function validateForm(){
  let x = document.forms["myForm"]["fName"].value;

  if(x == "" || x === null){
    console.log("Name must be filled")
    return false;
  }
}


function extraLongFactorials(n) {
  // Write your code here
 if(n === 0 || n === 1){
   console.log(BigInt(n).toString())
 }else{
   let result = BigInt(1)
   for(let i = 2; i <= n; i++){
     result *= BigInt(i)
   }
   console.log(result.toString());
 }
}

extraLongFactorials(3)



const fruits = ["apple", "mango", "pineapple", "orange", "gauva", "cherry", "apple", "mango", "cherry"]

//console.log(fruits)
//Shuffle the elements of an array

function shuffleArray(array){
  for(let i = array.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    [array[j], array[i]] = [array[i], array[j]]
  }
  return array;
}

//Function to iterate over an array and return matching characters

function findDuplicate(arr){
  let seen = new Set();
  let duplicate = new Set();

  for(element of arr){
    if(seen.has(element)){
      duplicate.add(element)
    }else{
      seen.add(element)
    }
  }
    return Array.from(duplicate)
}

*/

//Turing JavaScript developers test practice...

const products = new Map([
  ["trousers",30],
  ["pants",15]
])

const fruits = new Set([
  "apple", "mango", "orange", "banana"
])

///////////////////////////////////////////////////

//Check for the first element with a single occurance



let s = "babylon"


 //console.log(firstUniqChar(s))

function firstUniqChar(s){
  let charCount = {};

  for(let char of s){
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  for(let i = 0; i < s.length; i++){
    if(charCount[s[i]] === 1){
      return s[i]
    }
  }
  
    return -1
}


//////////////////////////////////////


//Check for missing numbers in an array of numbers
function findDisappearedNumbers(nums) {
  let result = [];
  let n = nums.length;

  // Mark the presence of numbers
  for (let i = 0; i < n; i++) {
      let val = Math.abs(nums[i]) - 1;
      if (nums[val] > 0) {
          nums[val] = -nums[val];
      }
  }

  // Collect the numbers that are missing
  for (let i = 0; i < n; i++) {
      if (nums[i] > 0) {
          result.push(i + 1);
      }
  }

  return result;
}

// Example usage:
//console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])); // Output: [5, 6]


//////////////////////////////////////
//Intersection of two arrays


function findIntersection(num1, num2){
  let set1 = new Set(num1);
  let result = [];

  for(let num of num2){
    if(set1.has(num)){
      result.push(num)
      set1.delete(num)
    }
  }
  return result;
}


//console.log(findIntersection([1, 2, 2, 3, 8, 5], [2, 2, 9, 3, 7]))

////////////////////////////////////////
//Check if a number repeats in a array

function findDuplicates(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
      let index = Math.abs(nums[i]) - 1;
      if (nums[index] < 0) {
          result.push(index + 1);
      } else {
          nums[index] = -nums[index];
      }
  }

  return result;
}

// Example usage:
//console.log(findDuplicates([4,3,2,7,8,2,3,1])); // Output: [2, 3]


////////////////////////////////////
//Check if N and its double exist 

function checkIfExist(arr) {
  let set = new Set();

  for (let num of arr) {
      if (set.has(num * 2) || (num % 2 === 0 && set.has(num / 2))) {
          return true;
      }
      set.add(num);
  }

  return false;
}

// Example usage:
//console.log(checkIfExist([10, 2, 5, 3])); // Output: true

///////////////////////////////////
//Finds all anagrams in a string

function findAnagrams(s, p) {
  let result = [];
  let pCount = Array(26).fill(0);
  let sCount = Array(26).fill(0);

  // Count frequency of characters in p
  for (let char of p) {
      pCount[char.charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < s.length; i++) {
      sCount[s.charCodeAt(i) - 97]++;
      if (i >= p.length) {
          sCount[s.charCodeAt(i - p.length) - 97]--;
      }
      if (pCount.join('') === sCount.join('')) {
          result.push(i - p.length + 1);
      }
  }

  return result;
}

// Example usage:
//console.log(findAnagrams("cbaebabacd", "abc")); // Output: [0, 6]

/*
Explanation:
Use arrays to count character frequencies in p and the current window of s.
Slide the window over s, updating counts and checking for matches.
*/


////////////////////////////////////////////////////////////
//Groups Anagram

function groupAnagrams(strs) {
  let map = new Map();

  for (let str of strs) {
      let key = str.split('').sort().join('');
      if (!map.has(key)) {
          map.set(key, []);
      }
      map.get(key).push(str);
  }

  return Array.from(map.values());
}

// Example usage:
//console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]


/**
  Explanation:
Sort each string to create a key.
Use a Map to group strings by their sorted key.
 */


////////////////////////////////////////////////////////
//Find the single number that doesn't appear twice

function singleNumber(nums) {
  return nums.reduce((acc, num) => acc ^ num, 0);
}

// Example usage:
//console.log(singleNumber([2,2,1])); // Output: 1


/////////////////////////////////////////////////////////
//Check if a number contains duplicate

function containsDuplicate(nums) {
  let set = new Set(nums);
  return set.size !== nums.length;
}

// Example usage:
//console.log(containsDuplicate([1,2,3,1])); // Output: true

/* 
Explanation:
Convert the array to a Set.
Compare the size of the Set with the original array length
 



///////////////////////////////////////////////////////
//Re-arrange the alphabets in a string living the special character in their original positions

let str = "tab-cde-f$g";
let text = "gfe-hcd&b-plmkvgasmk";

//console.log(rearrangeString(text))

function rearrangeString(s){
  let char = s.match(/[a-zA-Z]/g);
  let reversedChar = char.reverse();
  let charCount = 0;
  let result = "";

  for(let i = 0; i < s.length; i++){
    if(/[a-zA-Z]/.test(str[i])){
      result += reversedChar[charCount]
      charCount++
    }else{
      result += s[i]
    }
  }
  return result;
}


class TreeNode {
  constructor(val, right=null, left=null){
    this.val = val;
    this.right = right;
    this.left = left;
  }
}


function maxDepth(root){
  if(root === null){
    return 0
  }else{
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3, new TreeNode(4), new TreeNode(5), new TreeNode(6));

console.log(maxDepth(root))


//////////////////////////////////////////////////
//Fibonacci challenge for coding interview

function fibonacci(n){
  let dp = [0, 1];

  for(let i = 2; i <= n; i++){
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

//console.log(fibonacci(10))



///////////////////////////////////////////////////
//Find duplicates

//console.log(findDuplicate([2,1,2,1,2,5,4,8,7]))

function findDuplicate(arr){
  let seen = new Set();
  let duplicate = new Set();

  for(let i = 0; i < arr.length; i++){
    if(seen.has(arr[i])){
      duplicate.add(arr[i]);
      
    }else{
      seen.add(arr[i])
    }
  }
  return [...duplicate]
}



/////////////////////////////////////////////////////
//Binary tree problem

class TreeNode {
  constructor(val, left = null, right = null){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxDepth(root){
  if(root === null) return 0;
  else{
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
  }
}

const root = new TreeNode(3);
root.left = new TreeNode(20);
root.right = new TreeNode(9, new TreeNode(7), new TreeNode(15));

//console.log(maxDepth(root))

/////////////////////////////////////////////////////////////////////
//Program to find the first unique character in a set of data

function firstUniqChar(s){
  let charCount = {};

  for(let char of s){
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for(let i = 0; i < s.length; i++){
    if(charCount[s[i]] === 1){
      return s[i]
    }
  }
      return -1
}

//////////////////////////////////////////////////////////////////////
// Rotate the array to the right by k steps, where k is non-negative

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function rotateArr(arr, k){
  let n = arr.length;

  k = k % n;

  if(k === 0) return arr;

  let beginningPortion = arr.slice(n - k)

  let endingPortion = arr.slice(0,n - k)
  
  return beginningPortion.concat(...endingPortion);
  
}



/////////////////////////////////////////////////////
//

function twoSumLessThank(A, k){
  let sums = []
  let n = A.length;

  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){

      let S = A[i] + A[j]

      if(S <= k && i < j) sums.push(S);
    }
  }
  if(sums.length === 0) return -1
  else{
    return Math.max(...sums)
  }
}


let A = [34, 23, 1, 24, 75, 33, 54, 8, 32];
let k = 60;

//console.log(twoSumLessThank(A, k))

///////////////////////////////////////////////////////////
//Fibonacci practice program

function fibonacci(maxNum) {
  let fibo = [0, 1];

  for(let i = 2; i <= maxNum; i++){
    fibo.push(fibo[i - 1] + fibo[i - 2])
  }

  console.log(fibo)
}

//fibonacci(19)


/////////////////////////////////////////////////////////////////////////////
//function to return the maximum number in a set of distribution

function findMax(arr) {
  let min = -Infinity;

  for(let i = 0; i < arr.length; i++){
    while(arr[i] > min){
      min = arr[i]
    }
  }
  return min;
}

//console.log(findMax([23, 33, 48, 30, 39, 40, 28, 10, 38]))


////////////////////////////////////////////////////////////
//bubble sort algorithm

//console.log(bubbleSort([23, 33, 48, 30, 39, 40, 28, 10, 38]))
function bubbleSort(arr){
  let n = arr.length;

  for(let i = 0; i < n - 1; i++){
    for(let j = 0; j < n - i - 1; j++){

      if(arr[j] > arr[j + 1]){
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

///////////////////////////////////////////////////
//selection sort algorithm

function selectionSort(arr) {
  let n = arr.length;

  for(let i = 0; i < n; i++){
    let minIndex = i;
    for(let j = i + 1; j < n; j++){
      if(arr[j] < arr[i]) minIndex = j;
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

//console.log(selectionSort([23, 33, 48, 30, 39, 40, 28, 10, 38]))

////////////////////////////////////////////////////////////////////////
//Insertion sort algorithm

function insertionSort(arr){
  let n = arr.length;

  for(let i = 1; i < n; i++){
    for(let j = i + 1; j < n; j++){

    }
  }
}


////////////////////////////////////////////////////////////


let head = new ListNode(15, new ListNode(23));

head.next.next = new ListNode(23, new ListNode(48), head)
head.next.next.next = new ListNode(55)

//console.log(head)

////////////////////////////////////////////
//Transverse and print the data of each node in a linked list



class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function traverseAndPrint(head) {
  let currentNode = head;
  let output = "";
  while (currentNode) {
      output += currentNode.data + " -> ";
      currentNode = currentNode.next;
  }
  output += "null";
  console.log(output);
}




traverseAndPrint(node1);
///////////////////////////////////////////////////////////////////
//Transverse through the Nodes in a linked list and returns the lowest

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

function traverseAndPrint(head){
  let minVal = head.data;
  let currentNode = head;

  while(currentNode){
    if(currentNode.data < minVal) minVal = currentNode.data
    currentNode = currentNode.next
  }
  console.log(minVal)
}

const node1 = new Node(7);
const node2 = new Node(11);
const node3 = new Node(3);
const node4 = new Node(2);
const node5 = new Node(9);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

traverseAndPrint(node1);

*/

/////////////////////////////////////////////////////////////
//

/*

const my_arr = [12, 34, 56, 78, 90, 87];

for(let i in my_arr){
  for(let j = 0; j < my_arr.length; j++){
      console.log(my_arr[j])
  }}




function transverseAndPrint(head) {
  let currentNode = head;
  let output = "";

  while(currentNode){
    output += `${currentNode.data} -> `;
    currentNode = currentNode.next;
  }
  output += "null";

  console.log(output)
}



class ListNode{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}


const node1 = new ListNode(7);
const node2 = new ListNode(11);
const node3 = new ListNode(3);
const node4 = new ListNode(2);
const node5 = new ListNode(9);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;


//transverseAndPrint(node1)
lesserData(node1, 8)

function lesserData(head, num) {
  let currentNode = head;
  let qualified = new Set()

  while(currentNode) {
    if(currentNode.data < num) qualified.add(currentNode.data)
    
    currentNode = currentNode.next;
  }

  console.log([...qualified].sort());
}


*/


class TreeNode {
  constructor(data){
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

function max_depth(root){
  //Return 0 is the root node is null
  if(root === null){
    return 0;
  }else {
    //Recursively find the maximum depth of the of both the left and the right node
    let left_depth = maxDepth(root.left);
    let right_depth = maxDepth(root.right);

    return Math.max(left_depth, right_depth) + 1;
  }
}

(function(){
  if(true)console.log("True")
})

console.log("Hello World!")
