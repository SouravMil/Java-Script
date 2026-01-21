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
  if(length>maxLength)
  {
    maxLength = length;
  }
  return maxLength;
}
console.log(longestConsecLength(numArr));

//Given a string s, return a new string where all characters that appear more than once are removed, 
//keeping the order of the remaining characters.
///Logic: get frequencies of all the characters
///insert those characters in output whose frequency ===1
const stringInp = 'programming'
function onlyUniqueCharacters(stringInp)
{
  let freq = {};
  let outString = '';
  for(let char of stringInp)
  {
    freq[char] = (freq[char] || 0) + 1
  }
  for(let char of stringInp)
  {
    if(freq[char] === 1)
    {
      outString += char;
    }
  }
  return outString;
}
console.log(onlyUniqueCharacters(stringInp));
