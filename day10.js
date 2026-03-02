//Rotate an array to the LEFT by k steps
const arr = [1, 2, 3, 4, 5];
//5,4,3,2,1  //3,4,5,1,2
const k = 2;
function rotateToLeft(arr, k) {
  //helper function
  function arrOpr(array, start, end) {
    while (start < end) {
      [array[start], array[end]] = [array[end], array[start]];
      start++;
      end--;
    }
  }
  k %= arr.length;
  arrOpr(arr, 0, k - 1);
  arrOpr(arr, k, arr.length - 1);
  arrOpr(arr, 0, arr.length - 1);

  return arr;
}
console.log(rotateToLeft(arr, k));

//Find the length of the longest substring without repeating characters
const str = "abcabcbb";
function longestSubstring(str) {
  let maxLength = 0;

  for (let i = 0; i < str.length; i++) {
    let map = {};
    let currentLength = 0;
    for (let j = i; j < str.length; j++) {
      let char = str[j];
      if (map[char]) {
        break;
      }
      map[char] = true;
      currentLength++;
    }
    maxLength = Math.max(maxLength, currentLength);
  }
  return maxLength;
}
console.log(longestSubstring(str));

//Find the element that appears most frequently in an array
const numArr = [1, 3, 2, 3, 4, 3, 5, 2];
function mostFrequentElement(numArr) {
  let freq = {};
  for (let num of numArr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  let mostFreq = 0;
  let maxFreq = 0;
  for (let num of numArr) {
    if (freq[num] > maxFreq) {
      maxFreq = freq[num];
      mostFreq = num;
    }
  }
  return mostFreq;
}
console.log(mostFrequentElement(numArr));

//Find the product of all elements in an array except the current element
const numb = [1, 2, 3, 4];
function productOfElements(numb) {
  let outNumb = [];
  for (let i = 0; i < numb.length; i++) {
    let product = 1;
    for (let j = 0; j < numb.length; j++) {
      if (i !== j) {
        product *= numb[j];
      }
    }
    outNumb.push(product);
  }
  return outNumb;
}
console.log(productOfElements(numb));

//Given an array, move all 0s to the end without changing the order of non-zero elements.
const exArr = [0, 1, 0, 3, 12];
function shiftAllZeros(exArr) {
  let map = {};
  for (let num of exArr) {
    map[num] = (map[num] || 0) + 1;
  }
  let outPut = [];
  for (let num of exArr) {
    if (num !== 0) {
      outPut.push(num);
    }
  }
  for (let i = 0; i < (map[0] || 0); i++) {
    outPut.push(0);
  }
  return outPut;
}
console.log(shiftAllZeros(exArr));

//Find the longest word in a given sentence.
const inp = "I am learning JavaScript daily";
function longestWord(inp) {
  const inpArr = inp.split(" ");
  let longest = inpArr[0];
  for (let i = 1; i < inpArr.length; i++) {
    if (inpArr[i].length > longest.length) {
      longest = inpArr[i];
    }
  }
  return longest;
}
console.log(longestWord(inp));

//Check whether a number is a Perfect Number
const n = 28;
function validatePerfectNumb(n) {
  let div = 1;
  let divSum = 0;
  while (n > div) {
    if (n % div === 0) {
      divSum += div;
    }
    div++;
  }
  return divSum === n;
}
console.log(validatePerfectNumb(n));

//Check whether a string is a Palindrome
const string = "Madam";
function validatePalindrome(string) {
  let lowerCase = string.toLowerCase();
  let revStrn = "";
  for (let i = lowerCase.length - 1; i >= 0; i--) {
    revStrn += lowerCase[i];
  }
  return lowerCase === revStrn;
}
console.log(validatePalindrome(string));

//Find the Missing Number in an array
// You are given an array containing numbers from 1 to n,
// but one number is missing.
// Return the missing number.
const input = [1, 2, 4, 5];
function findMissingNumber(input) {
  let sum = 0;
  let n = input.length + 1;
  let i = 1;
  while (i <= n) {
    sum += i;
    i++;
  }
  let arrSum = 0;
  for (let i = 0; i < input.length; i++) {
    arrSum += input[i];
  }
  return sum - arrSum;
}
console.log(findMissingNumber(input));

//Check if two arrays are equal (same elements & same frequency, order does NOT matter).
const m = [1, 2, 3, 4];
const p = [4, 3, 2, 1];
function validateEqualArray(m, p) {
  if (m.length !== p.length) return false;
  let map = {};
  for (let numb of m) {
    map[numb] = (map[numb] || 0) + 1;
  }
  for (let numb of p) {
    if (!map[numb]) {
      return false;
    }
    map[numb]--;
  }
  for (let key in map) {
    if (map[key] !== 0) {
      return false;
    }
  }
  return true;
}
console.log(validateEqualArray(m, p));

//119: Find intersection in both arrays
const a = [3, 5, 7, 9, 2, 3, 5];
const b = [5, 9, 11];
function locateIntersection(a, b) {
  let aSet = new Set(a);
  let output1 = new Set();
  for (let numb of b) {
    if (aSet.has(numb)) {
      output1.add(numb);
    }
  }
  return [...output1];
}
console.log(locateIntersection(a, b));

//120: Find the first non-repeating character in a string.
const inpStr = "abcabcde";
function firstNonrepeating(inpStr) {
  let map = {};
  for (let char of inpStr) {
    map[char] = (map[char] || 0) + 1;
  }
  for (let char of inpStr) {
    if (map[char] === 1) {
      return char;
    }
  }
  return null;
}
console.log(firstNonrepeating(inpStr));

//121: Check whether a string is a rotation of another string
const str1 = "ABCD";
const str2 = "CDAB";
function validateStringRotate(str1, str2) {
  if (str1.length !== str2.length) return false;
  let doubled = str1 + str1;
  return doubled.includes(str2);
}
console.log(validateStringRotate(str1, str2));

//122 Find the length of longest sequence exist. Ignore order
const array = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
function longestSequence(array) {
  let arrSet = new Set(array);
  let maxLength = 1;
  for (let num of array) {
    //// start only if previous number not present
    if (!arrSet.has(num - 1)) {
      let length = 1;
      let current = num;
      while (arrSet.has(current + 1)) {
        current++;
        length++;
      }
      maxLength = Math.max(maxLength, length);
    }
  }
  return maxLength;
}
console.log(longestSequence(array));

//123: Check if a string contains any permutation of another string /////NEED UNDERSTANDING
const s1 = "ab";
const s2 = "eidbaoo";
function validateSubstringPresence(s1, s2) {
  if (s2.length < s1.length) return false;

  let need = {};
  let window = {};

  // count characters in s1
  for (let char of s1) {
    need[char] = (need[char] || 0) + 1;
  }

  let left = 0;

  for (let right = 0; right < s2.length; right++) {
    let char = s2[right];

    // add current character to window
    window[char] = (window[char] || 0) + 1;

    // keep window size equal to s1.length
    if (right - left + 1 > s1.length) {
      let leftChar = s2[left];
      window[leftChar]--;
      if (window[leftChar] === 0) {
        delete window[leftChar];
      }
      left++;
    }

    // compare maps
    if (right - left + 1 === s1.length) {
      if (matches(need, window)) {
        return true;
      }
    }
  }

  return false;
}

function matches(map1, map2) {
  for (let key in map1) {
    if (map1[key] !== map2[key]) return false;
  }
  return true;
}
console.log(validateSubstringPresence(s1, s2));

//124: Group Anagrams
const strArr = ["eat", "tea", "tan", "ate", "nat", "bat"];
function groupAnagrams(strArr) {
  let outGroup = {};
  for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i];
    let key = word.split("").sort().join("");
    if (outGroup[key]) {
      outGroup[key].push(word);
    } else {
      outGroup[key] = [word];
    }
  }
  return Object.values(outGroup);
}
console.log(groupAnagrams(strArr));

//125: Valid Parentheses
//"()"      → true
// "()[]{}"  → true
// "(]"      → false
// "([)]"    → false
// "{[]}"    → true
const charSet = "()[]{}";
function validateLogicalPair(charSet) {
  let pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack = [];
  for (let char of charSet) {
    if (!pairs[char]) {
      stack.push(char);
    } else {
      let top = stack.pop();
      if (top !== pairs[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log(validateLogicalPair(charSet));

//125.1: Remove Outer Parentheses
const inpChar = "(()())(())";
function removeOuterParentheses(inpChar) {
  let depth = 0;
  let result = "";
  for (let char of inpChar) {
    if (char === "(") {
      if (depth > 0) {
        result += char;
      }
      depth++;
    } else {
      depth--;
      if (depth > 0) {
        result += char;
      }
    }
  }
  return result;
}
console.log(removeOuterParentheses(inpChar));

//125.2: Minimum Add To Make Parentheses Valid
const paranChar = "()))((";
function countAdditionforValid(paranChar) {
  let openNeeded = 0;
  let closeNeeded = 0;
  for (let char of paranChar) {
    if (char === "(") {
      closeNeeded++;
    } else {
      if (closeNeeded > 0) {
        closeNeeded--;
      } else {
        openNeeded++;
      }
    }
  }
  return openNeeded + closeNeeded;
}
console.log(countAdditionforValid(paranChar));

//125.3: Longest Valid Parentheses
const inpParen = ")()())";
function longestValid(inpParen) {
  let isValid = 0;
  let closeNeed = 0;
  for (let char of inpParen) {
    if (char === "(") {
      closeNeed++;
    } else {
      if (closeNeed > 0) {
        closeNeed--;
      }
    }
  }
  return (isValid = inpParen.length - closeNeed);
}
console.log(longestValid(inpParen));

//126: validate if palindrome
const strSent = "A man, a plan, a canal: Panama";
function validatePalindromeString(strSent) {
  const charArr = strSent
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("");
  let charArr2 = [];
  for (let i = charArr.length - 1; i >= 0; i--) {
    charArr2.push(charArr[i]);
  }
  return charArr.join("") === charArr2.join("");
}
console.log(validatePalindromeString(strSent));

// //function validatePalindromeString(strSent)
// {
//   let cleaned = strSent
//     .toLowerCase()
//     .replace(/[^a-z0-9]/g, '');

//   let left = 0;
//   let right = cleaned.length - 1;

//   while (left < right)
//   {
//     if (cleaned[left] !== cleaned[right])
//     {
//       return false;
//     }
//     left++;
//     right--;
//   }

//   return true;
// }

//127: First non-repeating character
const exStr = "loveleetcode";
function returnIndexofFirstnonRepeatingChar(exStr)
{
  let map = {};
  for(let char of exStr)
  {
    map[char] = (map[char]||0)+1
  }
  for(let i=0;i<exStr.length;i++)
  {
    if(map[exStr[i]] === 1)
    {
      return i;
    }
  }
  return -1;
}
console.log(returnIndexofFirstnonRepeatingChar(exStr));

///Problem — Longest Substring Without Repeating Characters
// Task:
// Given a string s,
// return the length of the longest substring
// // that contains no repeating characters.
const s = "abcabcbb"
function longestNonrepeatingSubstring(s)
{
  let left = 0;
  let maxLength = 0;
  let map = {};
  for(let right=0;right<s.length;right++)
  {
    let char = s[right];
    if(map[char]>=left)
    {
      left = map[char]+1;
    }
    map[char] = right;
    maxLength = Math.max(maxLength, right-left+1);
  }
  return maxLength;
}
console.log(longestNonrepeatingSubstring(s));

//Problem 1 — Longest Substring With At Most 2 Distinct Characters
const string2 = "eceba";
function longestSubwith2distinct(string2)
{
  let left = 0;
  let maxLen = 0;
  let map = {};  
  for(let right=0;right<string2.length;right++)
  {
    let char = string2[right];
    //increase frequency
    map[char] = (map[char]||0)+1;
    //shrink window if more than 2 distinct
    while(Object.keys(map).length>2)
    {
      let leftChar = string2[left];
      map[leftChar]--;

      if(map[leftChar] === 0)
      {
        delete map[leftChar];
      }
      left++;
    }
    map[char] = right;
    maxLen = Math.max(maxLen, right-left+1);
  }
  return maxLen;
}
console.log(longestSubwith2distinct(string2)); 

//Given an array of integers and a number k, find the maximum sum of any contiguous subarray of size k.
const numArr1 = [2, 1, 5, 1, 3, 2];
const l = 3;
function maxSumofSubArr(numArr1,l)
{
  let left = 0;
  let sum = 0;
  let maxSum = 0;
  for(let right=0;right<numArr1.length;right++)
  {
     sum += numArr1[right];
     if(right-left+1 === l)
     {
      maxSum = Math.max(maxSum,sum);
      sum -= numArr1[left];
      left++;
     }
  }
  return maxSum;
}
console.log(maxSumofSubArr(numArr1,l));

//131: Given an array of positive integers and a target number,
// find the length of the smallest contiguous subarray whose sum is greater than or equal to target.
// If no such subarray exists, return 0.
const numArr2 = [2, 3, 1, 2, 4, 3];
const target = 7;
function smallestSubArrsum(numArr2,target)
{
  let left = 0;
  let sum = 0;
  let minLength = Infinity;
  for(let right=0;right<numArr2.length;right++)
  {
    sum += numArr2[right];
    while(sum>=target)
    {
      minLength = Math.min(minLength, right-left+1);
      sum -= numArr2[left];
      left++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}
console.log(smallestSubArrsum(numArr2,target))

//132: Given an array of integers and a number k,
// find the maximum average of any contiguous subarray of size k.
// Return the average (not the sum).
const numArr3 = [1, 12, -5, -6, 50, 3];
const c = 4;
function maxAverage(numArr3,c)
{
  let left = 0;
  let maxAvg = -Infinity;
  let sum = 0;
  for(let right=0;right<numArr3.length;right++)
  {
    sum += numArr3[right];
    if(right-left+1 === c)
    {
      let avg = sum/c;
      maxAvg = Math.max(maxAvg,avg);
      sum -= numArr3[left];
      left++
    }
  }
  return maxAvg;
}
console.log(maxAverage(numArr3,c));

//133: Problem: Find the first subarray of size k whose sum is exactly equal to target.
// First Subarray of Size K With Sum = Target. Return the starting index of the subArr.
const numArr4 = [1, 4, 2, 10, 2, 3, 1, 0, 20];
const K = 4;
const bullseye = 18;
function subarraywithSum(numArr4,K,bullseye)
{
  let left=0;
  let sum = 0;
  for(let right=0;right<numArr4.length;right++)
  {
    sum += numArr4[right];
    if(right-left+1 === K)
    {
      if(sum === bullseye)
      {
        return {start:left, end:right};
      }
      sum -= numArr4[left];
      left++
    }
  }
  return -1
}
console.log(subarraywithSum(numArr4,K,bullseye))