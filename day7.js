//Given a positive integer n, return the product of all prime digits present in n.
//If there are no prime digits, return 1.
///Logic: get digit one by one using %10.
///validate the number if prime
///store it in a variable by *=
const n = 24568756321;
function primeDigitsProduct(n) {
  let primeProduct = 1;
  while (n > 0) {
    let digit = n % 10;
    if (digit > 1) {
      let isPrime = true;
      for (let div = 2; div < digit; div++) {
        if (digit % div === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) primeProduct *= digit;
    }
    n = Math.floor(n / 10);
  }
  return primeProduct;
}
console.log(primeDigitsProduct(n));

//Given an array of integers arr, return a new array containing only the prime numbers from arr in the same order.
///Logic: Loop through the array
///validate if the current number is prime. push it to the output array
const arr = [4, 7, 10, 11, 15, 2];
function primeNumberArray(arr) {
  let primeArray = [];
  for (let num of arr) {
    let isPrime = true;
    if (num > 1) {
      for (let div = 2; div * div <= num; div++) {
        if (num % div === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) primeArray.push(num);
    }
  }
  return primeArray;
}
console.log(primeNumberArray(arr));

//Given a string s, return a new string where every vowel in s is replaced by *,
// while consonants and other characters remain unchanged.
//Treat uppercase and lowercase vowels the same.
///Logic: convert to lowerCase => split into characters.
///if character is vowel then replace it with *
///join all the character at the end
const string = "Hello World";
function vowelReplacement(string) {
  let finalStr = "";
  const vowels = "aeiouAEIOU";
  for (let char of string) {
    if (vowels.includes(char)) {
      finalStr += "*";
    } else {
      finalStr += char;
    }
  }
  return finalStr;
}
console.log(vowelReplacement(string));

//Given a positive integer n, return true if the sum of its digits is a prime number, otherwise return false.
///Logic: pick each individual digits using %10 and sum these digits
///validate the sum is prime. if yes, then true else false
const p = 88;
function validateSumisPrime(p) {
  let sum = 0;
  let isPrime = false;
  while (p > 0) {
    let digit = p % 10;
    sum += digit;
    p = Math.floor(p / 10);
  }
  if (sum > 1) {
    isPrime = true;
    for (let div = 2; div < sum; div++) {
      if (sum % div === 0) {
        isPrime = false;
        break;
      }
    }
  }
  return isPrime;
}
console.log(validateSumisPrime(p));

//Given a string s, return the character that appears the most number of times.
//If multiple characters tie for max frequency, return any one of them.
const strInp = "xyzyz";
function mostAppearedChar(strInp) {
  const lowerStr = strInp.toLowerCase();
  let freq = {};
  for (let char of lowerStr) {
    freq[char] = (freq[char] || 0) + 1;
  }
  let maxFreq = 0;
  let outChar = "";
  for (let char in freq) {
    if (freq[char] > maxFreq) {
      maxFreq = freq[char];
      outChar = char;
    } else if (freq[char] === maxFreq) {
      outChar += char;
    }
  }
  return outChar;
}
console.log(mostAppearedChar(strInp));

//Given an integer array, return the length of the longest consecutive increasing sequence of numbers.
///Logic: loop through the array
///check if next number = previous +1
///if next number is missing then log the length
///return max length at the end
const numArr = [1, 2, 3, 10, 11, 12, 13, 90];
function longestConsecLength(numArr) {
  let maxLength = 1;
  let length = 1;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i + 1] === numArr[i] + 1) {
      length++;
    } else {
      if (length > maxLength) {
        maxLength = length;
      }
      length = 1;
    }
  }
  if (length > maxLength) {
    maxLength = length;
  }
  return maxLength;
}
console.log(longestConsecLength(numArr));

//Given a string s, return a new string where all characters that appear more than once are removed,
//keeping the order of the remaining characters.
///Logic: get frequencies of all the characters
///insert those characters in output whose frequency ===1
const stringInp = "programming";
function onlyUniqueCharacters(stringInp) {
  let freq = {};
  let outString = "";
  for (let char of stringInp) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let char of stringInp) {
    if (freq[char] === 1) {
      outString += char;
    }
  }
  return outString;
}
console.log(onlyUniqueCharacters(stringInp));

//Given a string s, return the character that has the 2nd highest frequency in the string.
//If there is no such character (example: all characters appear equally), return null
///logic: count the freq of all the characters
///check freq object again and get the character that is lesser than largest but greater than smallest
const strn = "banana";
function secondHighestFreq(strn) {
  let freq = {};
  for (let char of strn) {
    freq[char] = (freq[char] || 0) + 1;
  }
  let maxFreq = 0;
  let secMaxFreq = 0;
  let secMaxChar = null;
  for (let char of strn) {
    if (freq[char] > maxFreq) {
      secMaxFreq = maxFreq;
      maxFreq = freq[char];
      secMaxChar = null;
    } else if (maxFreq > freq[char] && freq[char] > secMaxFreq) {
      secMaxFreq = freq[char];
      secMaxChar = char;
    }
  }
  return secMaxChar;
}
console.log(secondHighestFreq(strn));

//Given a positive integer n, return a new integer formed by reversing its digits.
///logic: pick digit one by one and put it in a variable using reverse loop
const h = 45021;
function reverseDigits(h) {
  let revNum = 0;
  while (h > 0) {
    let digit = h % 10;
    revNum = revNum * 10 + digit;
    h = Math.floor(h / 10);
  }
  return revNum;
}
console.log(reverseDigits(h));

//Given a positive integer n, return an array of all prime numbers from 1 to n (inclusive).
const N = 12;
function arrayOfPrime(N) {
  let primeArr = [];
  for (let i = 0; i <= N; i++) {
    if (i > 1) {
      let isPrime = true;
      for (let div = 2; div < i; div++) {
        if (i % div === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) primeArr.push(i);
    }
  }
  return primeArr;
}
console.log(arrayOfPrime(N));

//Given a number N, count how many digits are even and how many digits are odd.
///logic: pick digit one by one using %10
///if the digit%2 === 0 then increase even else odd
const numInp = 4827;
function counterOddEven(numInp) {
  let odd = 0;
  let even = 0;
  while (numInp > 0) {
    let digit = numInp % 10;
    if (digit % 2 === 0) {
      even++;
    } else {
      odd++;
    }
    numInp = Math.floor(numInp / 10);
  }
  return { even, odd };
}
console.log(counterOddEven(numInp));

//Detect the maximum consecutive
const bin = [0, 0, 0, 1, 1, 1, 1, 0, 0, 1];
function maximumRepeated(bin) {
  let count = 1;
  let maxCount = 0;
  let current = bin[0];
  for (let i = 1; i < bin.length; i++) {
    if (bin[i] === current) {
      count++;
    } else {
      if (count > maxCount) {
        maxCount = count;
      }
      count = 1;
      current = bin[i];
    }
  }
  return maxCount;
}
console.log(maximumRepeated(bin));
