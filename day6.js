//Given an array of numbers, return a new array containing only the palindrome numbers.
///logic: get last digit one by one using n%10. Put that digit in a new variable.
///at the end if the reversed number is === original then the number is palindrome
const numbers = [121, 345, 44, 567, 22, 789];
function returnParlindromeNumbers(numbers) {
  let palindromeNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    let processedNumber = 0;
    let m = numbers[i];
    while (m > 0) {
      let digit = m % 10;
      m = Math.floor(m / 10);
      processedNumber = processedNumber * 10 + digit;
    }
    if (processedNumber === numbers[i]) {
      palindromeNumbers.push(processedNumber);
    }
  }
  return palindromeNumbers;
}
console.log(returnParlindromeNumbers(numbers));

//Given a string, return true if it is an isogram, false otherwise.
///logic: calculate frequency of each chars
///loop through the frequency count. If freq increases beyond 1 then !isogram or else isogram
const word = "heritage";
function isogramWord(word) {
  const chars = word.toLowerCase().split("");
  let freq = {};
  for (let char of chars) {
    freq[char] = (freq[char] || 0) + 1;
  }
  let isIsogram = true;
  for (let char in freq) {
    if (freq[char] > 1) {
      isIsogram = false;
      break;
    }
  }
  return isIsogram;
}
console.log(isogramWord(word));

//Given an array of numbers, return the smallest missing positive integer.
const arr = [3, 4, -1, 1];
function smallestMissingPositive(arr) {
  const setArr = new Set(arr);
  let missing = 0;
  for (let i = 1; i <= arr.length + 1; i++) {
    if (!setArr.has(i)) {
      missing = i;
      break;
    }
  }
  return missing;
}
console.log(smallestMissingPositive(arr));

//Given an array of strings, return a new array containing the strings whose length is a prime number.
///Logic: Loop through the array and count the length of that word
///check if the length is a prime number then return that string
///all prime strings in a new output array.
const stringArr = ["hi", "cat", "note", "aaaa", "tools", "to"];
function stringLengthPrime(stringArr) {
  let outputArr = [];
  for (let i = 0; i < stringArr.length; i++) {
    let strnLength = stringArr[i].length;
    if (strnLength > 1) {
      let isPrime = true;
      for (let div = 2; div < strnLength; div++) {
        if (strnLength % div === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        outputArr.push(stringArr[i]);
      }
    }
  }
  return outputArr;
}
console.log(stringLengthPrime(stringArr));

//Given a positive integer n, return the sum of all unique prime digits present in n.
const n = 23573;
function sumOfAllUniquePrime(n)
{
    let outListSet = new Set();
    while(n>0)
    {
        let digit = n%10;
        n=Math.floor(n/10);
        if(digit>1)
        {
            let isPrime = true;
            for(let div=2;div<digit;div++)
            {
                if(digit%div === 0)
                {
                    isPrime = false;
                    break;
                }
            }
            if(isPrime)
            {
                outListSet.add(digit);
            }
        }
    }
    return [...outListSet].reduce((num1,num2)=> num1+num2,0);
}
console.log(sumOfAllUniquePrime(n));

//Given two positive integers n and k, repeatedly subtract k from n until n becomes less than k.
//Return the final value of n.
const m=23;
const k=5;
function returnMwhenlessThanK(m,k)
{
  while(m>k)
  {
    m = m-k;
    if(k>m)
    {
      break;
    }
  }
  return m;
}
console.log(returnMwhenlessThanK(m,k));

//Given a positive integer n, return the count of prime digits present in n.
const p = 2356897456321;
function countPrimeDigits(p)
{
  let counter = 0;
  while(p>0)
  {
    let digit = p%10;
    p=Math.floor(p/10);
    if(digit>1)
    {
      let isPrime = true;
      for(let div=2;div<digit;div++)
      {
        if(digit%div === 0)
        {
          isPrime = false;
          break;
        }
      }
      if(isPrime) counter++;
    }
  }
  return counter;
}
console.log(countPrimeDigits(p));