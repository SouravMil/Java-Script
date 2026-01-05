//Given a sentence, return the longest word that has no repeating characters.
//If multiple exist, return all of them in an array.

//output = ['logic', 'super']
//split by ' '
//loop through and find longest. Push it to a temp variable
//loop through the temp variable and check if any repeating characters present
const inpStrn = "JS logic drills are super fun";
const processedStrng = inpStrn.toLowerCase().split(" ");
function longestNoRepeating(processedStrng) {
  let maxlength = 0;
  let result = [];
  for (let i = 0; i < processedStrng.length; i++) {
    let word = processedStrng[i];
    let chars = word.split("");
    let hasRepeat = false;
    for (let j = 0; j < chars.length; j++) {
      for (let p = j + 1; p < chars.length; p++) {
        if (chars[j] === chars[p]) {
          hasRepeat = true;
          break;
        }
      }
      if (hasRepeat) break;
    }
    if (!hasRepeat) {
      if (word.length > maxlength) {
        maxlength = word.length;
        result = [word];
      } else if (word.length === maxlength) {
        result.push(word);
      }
    }
  }
  return result;
}
console.log(longestNoRepeating(processedStrng));

//Given an array of strings, return all strings that are palindromes
//(read the same forward and backward).
//logic: loop through each words.
//split through chars and reverse it.
//compare if the original === new value. then palindrome and push it to a new array.
const stringArr = ["level", "test", "madam", "js", "noon", "code"];
function allPalindrome(stringArr) {
  let palindrome = [];
  for (let i = 0; i < stringArr.length; i++) {
    let word = stringArr[i];
    let char = word.split("");
    let revword = "";
    for (let j = char.length - 1; j >= 0; j--) {
      revword += char[j];
    }
    if (revword === word) {
      palindrome.push(word);
    }
  }
  return palindrome;
}
console.log(allPalindrome(stringArr));

//Given an array of numbers, return the second largest unique number.
//If it doesn’t exist, return null.
//detect all the unique numbers first
//then compare each and store both largest and second largest numbers
//return only second largest.
const numArr = [5, 5, 4, 3];
function secondLargestUnique(numArr) {
  let uniqueNumbs = [];
  for (let i = 0; i < numArr.length; i++) {
    let isUnique = true;
    for (let j = 0; j < numArr.length; j++) {
      if (i !== j && numArr[i] === numArr[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      uniqueNumbs.push(numArr[i]);
    }
  }
  if (uniqueNumbs.length < 2) return null;
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let p = 0; p < uniqueNumbs.length; p++) {
    if (uniqueNumbs[p] > largest) {
      secondLargest = largest;
      largest = uniqueNumbs[p];
    } else if (uniqueNumbs[p] > secondLargest && uniqueNumbs[p] < largest) {
      secondLargest = uniqueNumbs[p];
    }
  }
  return secondLargest;
}
console.log(secondLargestUnique(numArr));

//// //Given a binary array arr[] consisting of only 0s and 1s,
// find the length of the longest contiguous sequence of either 1s or 0s in the array.
//
// Input: arr[] = [0, 1, 0, 1, 1, 1, 1]
// Output: 4
// Explanation: The maximum number of consecutive 1’s in the array is 4 from index 3-6.

const binArr = [0, 1, 0, 1, 1, 1, 1];

function longestContiguous(binArr) {
  let count = 1;
  let maxCount = 0;
  let currNum = binArr[0];
  let longestSequence = 0;
  for (let i = 1; i < binArr.length; i++) {
    if (currNum === binArr[i]) {
      count++;
    } else {
      if (count > maxCount) {
        maxCount = count;
        longestSequence = currNum;
      }
      count = 1;
      currNum = binArr[i];
    }
  }
  if (count > maxCount) {
    maxCount = count;
    longestSequence = currNum;
  }
  return { maxCount, longestSequence };
}

console.log(longestContiguous(binArr));

//Fibonacci of 22
function fibonacci22() {
  let n = 22;
  let fib22 = [0, 1];
  for (let i = 2; i < n; i++) {
    fib22[i] = fib22[i - 1] + fib22[i - 2];
    fib22.push(fib22[i]);
  }
  return fib22;
}
console.log(fibonacci22());

//Given an array of numbers, find the second largest number in the array.
//detect all unique numbers
//detect the largest and second largest
//return second largest
const numInp = [10, 5, 20, 8, 20];
function findSecondLargest(numInp) {
  let uniqueArr = [];
  for (let i = 0; i < numInp.length; i++) {
    let isUnique = true;
    for (let j = 0; j < numInp.length; j++) {
      if (i != j && numInp[i] === numInp[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      uniqueArr.push(numInp[i]);
    }
  }
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let p = 0; p < uniqueArr.length; p++) {
    if (uniqueArr[p] > largest) {
      secondLargest = largest;
      largest = uniqueArr[p];
    } else if (uniqueArr[p] > secondLargest && uniqueArr[p] < largest) {
      secondLargest = uniqueArr[p];
    }
  }
  return secondLargest;
}
console.log(findSecondLargest(numInp));

const numInput = [5, 27, 6, 55, 4, 55];
function secondLargeOneloop(numInput) {
  let largestFirst = -Infinity;
  let secLarge = -Infinity;
  for (let i = 0; i < numInput.length; i++) {
    if (numInput[i] > largestFirst) {
      secLarge = largestFirst;
      largestFirst = numInput[i];
    } else if (numInput[i] > secLarge && numInput[i] < largestFirst) {
      secLarge = numInput[i];
    }
  }
  return secLarge;
}
console.log(secondLargeOneloop(numInput));

//Given an array of numbers, find the first number that appears more than once.
//If no number repeats, return -1.
//loop through the array elements one by one
//varify if the element is visible earlier
//if condition satisfies, loop breaks
//return the last number
const inpArr = [3, 5, 1, 4, 3, 2];
function firstDuplicateDigit(inpArr) {
  let tempArr = [];
  let dupDigit = null;
  for (let digit of inpArr) {
    if (!tempArr.includes(digit)) {
      tempArr.push(digit);
    } else {
      dupDigit = digit;
      break;
    }
  }
  if (dupDigit === null) {
    return -1;
  } else {
    return dupDigit;
  }
}
console.log(firstDuplicateDigit(inpArr));

//Given an array of numbers, find the number that appears the maximum number of times.
//If there are multiple, return any one of them.
const numbers = [1,1,1,1,3,2,3,4,3,2,3,5,7,2,2,2,2,6,6,6,6,6,5,5]
function numberFrequencyList(numbers)
{
    let freq = {};
    for(let digit of numbers)
    {
        if(freq[digit])
        {
            freq[digit] = freq[digit]+1;
        }
        else{
            freq[digit] = 1;
        }
    }
    let result = [];
    for(let digit in freq)
    {
        result.push({digit: Number(digit), frequency: freq[digit]})
    }
    return result;
}
console.log(numberFrequencyList(numbers));

//find the number that appears the maximum number of times.
function maxFrequencyDigit(numbers)
{
    let freq = {};
    for(let num of numbers)
    {
        if(freq[num])
        {
            freq[num] = freq[num]+1;
        }
        else{
            freq[num] = 1;
        }
    }
    let maxDigit = null;
    let maxFreq = 0;
    for(let digit in freq)
    {
        if(freq[digit]>maxFreq)
        {
            maxFreq = freq[digit];
            maxDigit = Number(digit);
        }
    }
    return {digit: maxDigit,frequency: maxFreq}
}
console.log(maxFrequencyDigit(numbers));

//Given an array of numbers, find all pairs whose sum is equal to a given target value.
const arr = [2, 4, 3, 5, 7, 8, 9]
const target = 7
function findPairs(arr,target)
{
    let output = [];
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i] + arr[j] === target)
            {
                output.push([arr[i],arr[j]])
            }
        }
    }
    return output;
}
console.log(findPairs(arr,target));

