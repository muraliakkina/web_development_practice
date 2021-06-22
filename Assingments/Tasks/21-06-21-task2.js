// 1. Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
 var result = [];//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 
 //Some piece of code goes here 
 for(let el of ar2){
     result.push(el)
 }
 return result;
}


// 2. Reverse a String
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   // your code here
   var array1 = s.split("")
   var reverse = array1.reverse()
   return reverse.join("")
}

// 3. Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”
console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt)
{
  // your code here
 var prime = true;
 var tenprime = [];
 while(tenprime.length<nPrimes){
   if(startAt%2!==0&&startAt%3!==0&&startAt%5!==0&&startAt%7!==0&&startAt%11!=0){
     tenprime.push(startAt)
   }
   startAt++
 }
 return tenprime;
}

// 4. Print the first 100 prime numbers
printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
 var n = 0;
 
 while(n < nPrimes)
 {
 if (isPrime(n))
 {
 console.log(n);
 }
 n++;
 }
}// Returns true if a number is prime
function isPrime(n)
{
 // your code here
 if(n<2){
   return false
 }else{
  for(j=2;j<n;j++){
    if(n%j==0){
      return false
    }
  }
 }
 return true;
}

// 5. Find the maximum number in an array of numbers
  
  for(i=0;i<ar.length;i++){
    let dumy = [];
    let j = 0;
    while(ar.length>j){
      if(ar[i]>ar[j]){
        dumy.push(ar[j])
      }
      j++;
    }
    if(dumy.length ==ar.length-1 ){
      return ar[i]
    }
  }
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log('Max:', max);
function findMax(ar){
  // your code here
  for(i=0;i<ar.length;i++){
    let dumy = [];
    let j = 0;
    while(ar.length>j){
      if(ar[i]>ar[j]){
        dumy.push(ar[j])
      }
      j++;
    }
    if(dumy.length ==ar.length-1 ){
      return ar[i]
    }
  }
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log('Max:', max);

// 6. Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
function powersOfTwo(n){
  var i = 0;
  var res = [];
  while(i<=n){
    res.push(Math.pow(2,i))
    i++
  }
  return res;
}
console.log(powersOfTwo(2))

// 7. Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar)
{
 // your code here
 var empty = []
 for(let i of ar){
   if(i>0){
     empty.push(i)
   }
 }
 return empty
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);


// 8. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
  var count = 0;
  var sum = 0;
  var ar = [];
  for(let i of arr){
    if(i<0){
      sum += i;
    }else{
      count++;
    }
  }
  ar.push(count)
  ar.push(sum)
  return ar
}
console.log(ar2(arr));


