//Given a string s, return the number of characters that appear more than once.
//Ignore case.
//Characters must be counted only once even if they repeat many times.
const S = "Programming";
function multiFreqCharacters(S) {
  const newS = S.toLowerCase();
  let freq = {};
  for (let char of newS) {
    freq[char] = (freq[char] || 0) + 1;
  }
  let outPutCount = 0;
  for (let char in freq) {
    if (freq[char] > 1) {
      outPutCount++;
    }
  }
  return outPutCount;
}
console.log(multiFreqCharacters(S));

//Given an integer n, return the number of divisors of n.
///logic: a variable divisor, increase it till divisor<=n
///if n%div === 0 then increase count
const M = 12;
function divisorsCount(M) {
  let divCounter = 0;
  for (let div = 1; div <= M; div++) {
    if (M % div === 0) {
      divCounter++;
    }
  }
  return divCounter;
}
console.log(divisorsCount(M));

//Given a string s, return true if it contains all unique characters (no character repeats). Otherwise return false.
const s = "Apple";
function uniqueCharValidation(s) {
  const newStr = s.toLowerCase();
  let freq = {};
  for (let char of newStr) {
    freq[char] = (freq[char] || 0) + 1;
  }
  let isUnique = true;
  for (let char in freq) {
    if (freq[char] > 1) {
      isUnique = false;
      break;
    }
  }
  return isUnique;
}
console.log(uniqueCharValidation(s));

//Given a string s, return the character with the highest alphabetical order (case-insensitive).
const inpStr = "Apple";
function highestAlphabeticalOrder(inpStr) {
  const lowerStr = inpStr.toLowerCase();
  let outHighest = lowerStr[0];
  for (let i = 1; i < lowerStr.length; i++) {
    if (outHighest < lowerStr[i]) {
      outHighest = lowerStr[i];
    }
  }
  return outHighest;
}
console.log(highestAlphabeticalOrder(inpStr));

//Given an integer array nums, return a new array containing only the numbers that appear exactly once in nums.
const numInp = [1, 2, 2, 3, 4, 4, 5];
function onlyUniqueNumb(numInp) {
  let outputArr = [];
  for (let i = 0; i < numInp.length; i++) {
    let isUnique = true;
    for (let j = 0; j < numInp.length; j++) {
      if (i !== j && numInp[i] === numInp[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) outputArr.push(numInp[i]);
  }
  return outputArr;
}
console.log(onlyUniqueNumb(numInp));

//Given an integer n, return the product of all digits of n.
const n = 1123;
function productOfDigits(n) {
  let product = 1;
  if (n === 0) return 0;
  while (n > 0) {
    let digit = n % 10;
    product = product * digit;
    n = Math.floor(n / 10);
  }
  return product;
}
console.log(productOfDigits(n));

//Given a string s, return the character that appears the most number of times.
const str = "Mississippi";
function mostFrequentChar(str) {
  let charFreq = {};
  for (let char of str) {
    charFreq[char] = (charFreq[char] || 0) + 1;
  }
  let mostFrequentChar = str[0];
  let maxFreq = 0;
  for (let char in charFreq) {
    if (charFreq[char] > maxFreq) {
      maxFreq = charFreq[char];
      mostFrequentChar = char;
    }
  }
  return mostFrequentChar;
}
console.log(mostFrequentChar(str));

//Given a number n, return true if it is an Armstrong number.
//Definition reminder:
// A number is called an Armstrong number if:
// Sum of (each digit raised to the power of number of digits) = original number
const int = 153;
function validateArmstrongNumber(int) {
  let num = int;
  let outPut = 0;
  const digitCount = int.toString().length;
  while (num > 0) {
    let digit = num % 10;
    outPut = outPut + Math.pow(digit, digitCount);
    num = Math.floor(num / 10);
  }
  return outPut === int;
}
console.log(validateArmstrongNumber(int));

//Given a string s, return a new string with the characters in alternating case.
const string = "hello world";
function charsAlternateCase(string) {
  const charArr = string.split("");
  let outArr = [];
  let count = 0;
  for (let i = 0; i < charArr.length; i++) {
    if (charArr[i] === " ") {
      outArr.push(" ");
      continue;
    }
    if (count % 2 === 0) {
      outArr.push(charArr[i].toLowerCase());
    } else {
      outArr.push(charArr[i].toUpperCase());
    }
    count++;
  }
  return outArr.join("");
}
console.log(charsAlternateCase(string));

//Given an integer n, return the sum of all even digits of n.
const inp = 48291;
function evenDigitsSum(inp) {
  let evenSum = 0;
  while (inp > 0) {
    let digit = inp % 10;
    if (digit % 2 === 0) {
      evenSum += digit;
    }
    inp = Math.floor(inp / 10);
  }
  return evenSum;
}
console.log(evenDigitsSum(inp));

//Given an integer array arr, return true if the array is a mountain array, otherwise return false.
///logic: pick the largest value in the loop and make sure it is not positioned at beginning or ending of array
/// Loop through the array and make sure it increases till largest value and then decreases.
const intArr = [1, 2, 3, 1];
function validationMountainArr(intArr) {
  if (intArr.length < 3) return false;
  let index = 0;
  //going up towards large
  while (index < intArr.length - 1 && intArr[index] < intArr[index + 1]) {
    index++;
  }
  if (index === 0 || index === intArr.length - 1) {
    return false;
  }
  while (index < intArr.length - 1) {
    if (intArr[index] <= intArr[index + 1]) {
      return false;
    }
    index++;
  }
  return true;
}
console.log(validationMountainArr(intArr));

//Given an integer array, return the index of the first peak element.
const integer = [1, 2, 4, 1, 3];
function firstPeak(integer) {
  if (integer.length < 3) return -1;
  let index = 0;
  while (index < integer.length - 1 && integer[index] < integer[index + 1]) {
    index++;
  }
  if (index === 0 || index === integer.length - 1) {
    return -1;
  }

  if (
    integer[index] > integer[index - 1] &&
    integer[index] > integer[index + 1]
  ) {
    return index;
  }
  return -1;
}
console.log(firstPeak(integer));

//Given a string s, return true if it is an isogram, otherwise return false.
const Str = "Thumbs Up";
function validateIsogram(Str) {
  const charArr = Str.toLowerCase().split("");
  let seen = {};
  for (let char of charArr) {
    if (char === " ") continue;
    seen[char] = (seen[char] || 0) + 1;
  }
  let isIsogram = true;
  for (let char in seen) {
    if (seen[char] > 1) {
      isIsogram = false;
      break;
    }
  }
  return isIsogram;
}
console.log(validateIsogram(Str));

//Given an integer array nums, return true if the array is strictly increasing, otherwise return false.
const arrInt = [1, 3, 4, 5, 7];
function validateIncrease(arrInt) {
  for (let i = 0; i < arrInt.length - 1; i++) {
    if (arrInt[i] >= arrInt[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(validateIncrease(arrInt));

//Given a string s, return true if the string contains at least one vowel, otherwise return false.
const exStr = "WHY";
const vowel = "aeiou";
function validateVowelPresence(exStr) {
  const newStr = exStr.toLowerCase();
  for (let char of newStr) {
    if (vowel.includes(char)) {
      return true;
    }
  }
  return false;
}
console.log(validateVowelPresence(exStr));

//Given an integer array nums, return the second largest number in the array.
//If there is no such number, return null.
const arrNum = [2, 3, 5, 4, 1];
function secondLargest(arrNum) {
  let largest = -Infinity;
  let secLargest = -Infinity;
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > largest) {
      secLargest = largest;
      largest = arrNum[i];
    } else if (arrNum[i] > secLargest && arrNum[i] < largest) {
      secLargest = arrNum[i];
    }
  }
  return secLargest === -Infinity ? null : secLargest;
}
console.log(secondLargest(arrNum));

//Total order amount for each user. Highest spender, return separate array for no spender
const users = [
  { id: 1, name: "Rahul", orders: [1200, 3400, 460] },
  { id: 2, name: "Anita", orders: [99, 299] },
  { id: 3, name: "Karan", orders: [] },
  { id: 4, name: "Neha", orders: [1200, 5000, 8000] },
];
function multipleUsersExpense(users) {
  let orderTotal = {};
  let noSpender = [];
  let highestSpender = { name: null, amount: 0 };
  users.forEach((element) => {
    if (element.orders.length === 0) {
      noSpender.push(element);
    } else {
      orderTotal[element.name] = element.orders.reduce(
        (sum, curr) => sum + curr,
        0,
      );
    }
  });
  for (let obj in orderTotal) {
    if (orderTotal[obj] > highestSpender.amount) {
      highestSpender.amount = orderTotal[obj];
      highestSpender.name = obj;
    }
  }
  return { orderTotal, noSpender, highestSpender };
}
console.log(multipleUsersExpense(users));

//Given an array of integers, return a new array where each element is the sum of all elements to its right.
//For the last element, the sum should be 0.
const intInp = [1, 2, 3, 4];
function sumElementArr(intInp) {
  let outputArr = [];
  let outSum = 0;
  for (let j = intInp.length - 1; j >= 0; j--) {
    outputArr[j] = outSum;
    outSum += intInp[j];
  }
  return outputArr;
}
console.log(sumElementArr(intInp));

//Given an array of integers,
//return true if the array can be made strictly increasing by removing at most ONE element. Otherwise, return false.
const arr = [1, 2, 1, 4];
function validateIncreasingArr(arr) {
  let failCount = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      failCount++;
      if (failCount > 1) return false;
      if (i > 0 && arr[i - 1] >= arr[i + 1]) {
        arr[i + 1] = arr[i];
      }
    }
  }
  return true;
}
console.log(validateIncreasingArr(arr));

//Given an array of integers, return the index of the FIRST element that breaks the strictly increasing order.
//If the array is strictly increasing, return -1.
const arrNumb = [1, 3, 2, 4, 5];
function firstBreakElementinOrder(arrNumb) {
  let failIndex = -1;
  for (let i = 0; i < arrNumb.length - 1; i++) {
    if (arrNumb[i] >= arrNumb[i + 1]) {
      failIndex = i;
      break;
    }
  }
  return failIndex;
}
console.log(firstBreakElementinOrder(arrNumb));

//Given an array of integers, return the length of the longest strictly increasing contiguous subarray.
//Contiguous = elements must be next to each other.
const exArr = [1, 2, 3, 2, 3, 4, 5];
function longestIncrementalArr(exArr) {
  let counter = 1;
  let longest = 0;
  for (let i = 0; i < exArr.length - 1; i++) {
    let subarray = [];
    if (exArr[i] < exArr[i + 1]) {
      counter++;
    } else {
      if (subarray.length > longest) {
        longest = counter;
      }
      counter = 1;
    }
  }
  if (counter > longest) {
    longest = counter;
  }
  return longest;
}
console.log(longestIncrementalArr(exArr));

//Given a string s, return true if the string can be made
//an isogram by removing at most ONE character. Otherwise return false.
const exStrn = "programe";
function validateIsogrambyremovingChar(exStrn) {
  let frequency = {};
  for (let char of exStrn) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  let extra = 0;
  for (let char in frequency) {
    extra += frequency[char] - 1;
    if (extra > 1) {
      return false;
    }
  }
  return true;
}
console.log(validateIsogrambyremovingChar(exStrn));

//Given an array of integers, return true if there exists an index such that the sum of elements on the left
//is equal to the sum of elements on the right. Otherwise return false.
//The element at the index itself is not included in either sum.
const numbArr = [2, 1, -1];
function leftsumEqualrightsum(numbArr) {
  //rightsum = total - leftsum - current;
  //rightsum = 28 - 11 - 6
  let rightSum = 0;
  let leftSum = 0;
  const totalSum = numbArr.reduce((curr, nxt) => curr + nxt, 0);
  for (let i = 0; i < numbArr.length; i++) {
    let current = numbArr[i];
    rightSum = totalSum - leftSum - current;
    if (rightSum === leftSum) {
      return true;
    }
    leftSum += numbArr[i];
  }
  return false;
}
console.log(leftsumEqualrightsum(numbArr));

//Given an integer n, return true if n is a happy number, otherwise return false.
// //A number is happy if:
// Replace the number by the sum of squares of its digits
// Repeat the process
// If it eventually becomes 1 → ✅ happy
// If it enters a loop (never reaches 1) → ❌ not happy
const p = 19;
function validateHappyNumber(p) {
  let num = p;
  let seen = {};
  while (num !== 1) {
    if (seen[num]) return false;
    seen[num] = true;
    let sum = 0;
    while (num > 0) {
      let digit = num % 10;
      sum += Math.pow(digit, 2);
      num = Math.floor(num / 10);
    }
    num = sum;
    //console.log('testing loop'+num);
  }
  return true;
}
console.log(validateHappyNumber(p));

//Given a string s, return the first character that appears exactly once.
//If no such character exists, return null.
const strng = "leetcode";
function firstUniqueCharacter(strng) {
  let seen = {};
  for (let char of strng) {
    seen[char] = (seen[char] || 0) + 1;
  }
  for (let char of strng) {
    if (seen[char] === 1) {
      return char;
    }
  }
  return null;
}
console.log(firstUniqueCharacter(strng));

//Given an array of integers, return true if there exists a pair of numbers whose sum equals
//a given target. Otherwise return false.
//You cannot use the same element twice.
const nums = [2, 7, 11, 15];
const target = 9;
function pairSumExist(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        return true;
      }
    }
  }
  return false;
}
console.log(pairSumExist(nums, target));

//Check whether a given number is a “Strong Number”.
const num = 145;
function validateStrongNumber(num) {
  let p = num;
  let prodSum = 0;
  while (p > 0) {
    let prod = 1;
    let digit = p % 10;
    for (let i = digit; i > 0; i--) {
      prod = prod * i;
    }
    prodSum += prod;
    p = Math.floor(p / 10);
  }
  return num === prodSum;
}
console.log(validateStrongNumber(num));

//Find the second largest element in an array without sorting it.
const inpArr = [-5, -1, -10];
function secondLargest(inpArr)
{
  let largest = -Infinity;
  let secLargest = -Infinity;
  for(let i=0;i<inpArr.length;i++)
  {
    if(inpArr[i]>largest)
    {
      secLargest = largest;
      largest = inpArr[i];
    }
    else if(inpArr[i]>secLargest && inpArr[i]<largest)
    {
      secLargest = inpArr[i];
    }
  }
  return secLargest;
}
console.log(secondLargest(inpArr));

//Find the first non-repeating character in a given string.
const Input = "stress";
function firstNonRepeatingChar(Input)
{
  let seen = {};
  for(let char of Input)
  {
    seen[char] = (seen[char]||0)+1
  }
  for(let char of Input)
  {
    if(seen[char] === 1)
    {
      return char;
    }
  }
  return null;
}
console.log(firstNonRepeatingChar(Input));

//101