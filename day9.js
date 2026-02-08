//Write a JavaScript program to:
//Find the first repeating element in an array.
const numArr = [10, 5, 3, 4, 3, 5, 6];
function firstRepeatingElement(numArr) {
  let seen = {};
  for (let num of numArr) {
    seen[num] = (seen[num] || 0) + 1;
  }
  let repeatedNum = null;
  for (let num of numArr) {
    if (seen[num] > 1) {
      repeatedNum = num;
      break;
    }
  }
  return repeatedNum;
}
console.log(firstRepeatingElement(numArr));

//Write a JavaScript program to:
//Check whether a given number is an Armstrong Number.
const N = 153;
function validateArmstrongNumb(N) {
  let n = N;
  let pow = n.toString().length;
  let outSum = 0;
  while (n > 0) {
    let digit = n % 10;
    outSum += Math.pow(digit, pow);
    n = Math.floor(n / 10);
  }
  return outSum === N;
}
console.log(validateArmstrongNumb(N));

//Write a JavaScript program to:
//Check whether two strings are anagrams of each other.
const inpStr = ["rat", "tra"];
function validateAnagrams(inpStr) {
  let str1 = inpStr[0];
  let str2 = inpStr[1];

  if (str1.length !== str2.length) return false;

  let map = {};
  for (let i = 0; i < inpStr.length; i++) {
    let charArr = inpStr[i].split("");
    for (let char of charArr) {
      if (i === 0) {
        map[char] = (map[char] || 0) + 1;
      } else {
        map[char] = (map[char] || 0) - 1;
      }
    }
  }
  for (let key in map) {
    if (map[key] !== 0) {
      return false;
    }
  }
  return true;
}
console.log(validateAnagrams(inpStr));

//Find the sum of all prime numbers between 1 and a given number N (inclusive).
const p = 12;
function sumOfPrimes(p)
{
    let primeSum = 0;
    for(let i=2;i<=p;i++)
    {
        let isPrime = true;
        for(let div=2;div*div<=i;div++)
        {
            if(i%div === 0)
            {
                isPrime = false;
                break;
            }
        }
        if(isPrime) primeSum += i;
    }
    return primeSum;
}
console.log(sumOfPrimes(p));

//Find the pair of elements in an array whose sum is equal to a given target.
const intArr = [1, 3, 11, 15, 5, 4, 2, 7];
const target = 9;
function arrayOfPairsumTarget(intArr,target)
{
    for(let i=0;i<intArr.length;i++)
    {
        let pairFound = false;
        for(let j=i+1;j<intArr.length;j++)
        {
            if(intArr[i]+intArr[j] === target)
            {
                pairFound = true;
                return [intArr[i],intArr[j]];
            }
        }
        if(pairFound) break;
    }
    return outPair;
}
console.log(arrayOfPairsumTarget(intArr,target));

//Find secondLargest number
const arr = [10, 5, 20, 8];
function findSecondLargest(arr)
{
    let largest = -Infinity;
    let secondLarge = -Infinity;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>largest)
        {
            secondLarge = largest;
            largest = arr[i];
        }
        else if(arr[i]>secondLarge && arr[i]<largest)
        {
            secondLarge = arr[i];
        }
    }
    return secondLarge === -Infinity ? null:secondLarge;
}
console.log(findSecondLargest(arr));

//Find the longest common prefix among an array of strings.
const strArr =  ["flower", "flow", "flight"];
function longestCommonPrefix(strArr)
{

    let prefix = '';
    if(strArr.length === 0) return '';
    let firstWord = strArr[0];
    for(let i=0;i<firstWord.length;i++)
    {
      let currChar = firstWord[i];
      for(let j=1;j<strArr.length;j++)
      {
        if(i>=strArr[j].length || strArr[j][i] !== currChar)
        {
          return prefix;
        }
      }
      prefix += currChar;
    }
    return prefix;
}
console.log(longestCommonPrefix(strArr));

//108