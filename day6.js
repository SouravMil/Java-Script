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
function sumOfAllUniquePrime(n) {
  let outListSet = new Set();
  while (n > 0) {
    let digit = n % 10;
    n = Math.floor(n / 10);
    if (digit > 1) {
      let isPrime = true;
      for (let div = 2; div < digit; div++) {
        if (digit % div === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        outListSet.add(digit);
      }
    }
  }
  return [...outListSet].reduce((num1, num2) => num1 + num2, 0);
}
console.log(sumOfAllUniquePrime(n));

//Given two positive integers n and k, repeatedly subtract k from n until n becomes less than k.
//Return the final value of n.
const m = 23;
const k = 5;
function returnMwhenlessThanK(m, k) {
  while (m > k) {
    m = m - k;
    if (k > m) {
      break;
    }
  }
  return m;
}
console.log(returnMwhenlessThanK(m, k));

//Given a positive integer n, return the count of prime digits present in n.
const p = 2356897456321;
function countPrimeDigits(p) {
  let counter = 0;
  while (p > 0) {
    let digit = p % 10;
    p = Math.floor(p / 10);
    if (digit > 1) {
      let isPrime = true;
      for (let div = 2; div < digit; div++) {
        if (digit % div === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) counter++;
    }
  }
  return counter;
}
console.log(countPrimeDigits(p));

//Given a positive integer n, compute the product of all digits of n.
///logic: pick digits one by one using N%10. Update N=Math.floor(N/10).
///put digits in a final variable using *= methods.
const N = 245;
function productOfDigits(N) {
  let product = 1;
  while (N > 0) {
    let digit = N % 10;
    N = Math.floor(N / 10);
    product *= digit;
  }
  return product;
}
console.log(productOfDigits(N));

//Given a string s, return the count of vowels in the string.
///logic: covert string into lowerCase and split by ''.
///loop through the array of characters and verify if character is present in vowel string
///if yes, then increase the counter.
const s = "Hello World";
const vowels = "aeiou";
function countVowels(s, vowels) {
  let counter = 0;
  let covrtedString = s.toLowerCase().split("");
  for (let char of covrtedString) {
    if (vowels.includes(char)) {
      counter++;
    }
  }
  return counter;
}
console.log(countVowels(s, vowels));

//Given an array of integers arr, return a new array containing only the even numbers in the same order.
///logic: loop through the array. put an if condition if number/2 and reminder ===0 then push it to an output array.
const intArr = [3, 6, 2, 9, 10, 11];
function arrOfEvenNumbers(intArr) {
  let outputArr = [];
  for (let i = 0; i < intArr.length; i++) {
    if (intArr[i] % 2 === 0) {
      outputArr.push(intArr[i]);
    }
  }
  return outputArr;
}
console.log(arrOfEvenNumbers(intArr));

//Given a positive integer n, return true if n is a prime number, otherwise return false.
const M = 1;
function validatePrimeNumber(M) {
  let isPrime = true;
  if (M <= 1) return false;
  if (M > 1) {
    for (let div = 2; div < M; div++) {
      if (M % div === 0) {
        isPrime = false;
        break;
      }
    }
  }
  return isPrime;
}
console.log(validatePrimeNumber(M));

//Given a positive integer n, return the sum of its digits.
const A = 5698;
function sumOfDigits(A) {
  let sum = 0;
  while (A > 0) {
    let digit = A % 10;
    A = Math.floor(A / 10);
    sum += digit;
  }
  return sum;
}
console.log(sumOfDigits(A));

//Given an array of integers arr, return the maximum element in the array.
const array = [7, 2, 10, 4];
function largestElement(array) {
  let largest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}
console.log(largestElement(array));

//Given a string s, return a new string where the characters are in reverse order.
const h = "hello";
function reverseString(h) {
  const output = h.split("").reverse().join("");
  return output;
}
console.log(reverseString(h));

//Given a string s consisting of digits (0–9), return the sum of all prime digits in the string.
///logic: pick digit one by one using S%10.
///update S each time.
///verify the digit is prime, if yes, then add it to another variable
const S = 24571;
function sumOfAllPrime(S) {
  let primeSum = 0;
  while (S > 0) {
    let digit = S % 10;
    S = Math.floor(S / 10);
    if (digit > 1) {
      let isPrime = true;
      for (let div = 2; div < digit; div++) {
        if (digit % div === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primeSum += digit;
      }
    }
  }
  return primeSum;
}
console.log(sumOfAllPrime(S));

//Given an array of integers arr, return a new array containing only the elements that
//are strictly greater than the average of the entire array.
///logic: sum all the numbers present in the array and devide it by array.length
///loop through the array again and validate if avg<number.
///push these numbers to a new array.
const numArray = [2, 5, 7, 3, 9];
function greaterThanAvg(numArray) {
  let sumOfNumbers = 0;
  for (let i = 0; i < numArray.length; i++) {
    sumOfNumbers += numArray[i];
  }
  let arrAvg = sumOfNumbers / numArray.length;
  let newArray = [];
  for (let num of numArray) {
    if (num > arrAvg) newArray.push(num);
  }
  return newArray;
}
console.log(greaterThanAvg(numArray));

//Given an array of integers arr, return the second largest element in the array.
///Loop through the array. Create variables 'largest' and '2ndLargest' and initiate at -Infinity
///create if condition, largest<arr[0] then 2ndLargest = largest and largest = arr[0]
///another if condition, if number>2ndLargest and number<largest then 2ndLargest = arr[i]
const arrNumb = [4, 7, 1, 9, 3];
function secondLargest(arrNumb) {
  let largest = -Infinity;
  let secLargest = -Infinity;
  for (let i = 0; i < arrNumb.length; i++) {
    if (arrNumb[i] > largest) {
      secLargest = largest;
      largest = arrNumb[i];
    } else if (arrNumb[i] > secLargest && arrNumb[i] < largest) {
      secLargest = arrNumb[i];
    }
  }
  return secLargest;
}
console.log(secondLargest(arrNumb));

//Given a positive integer n, return the sum of the digits of n.
///logic: collect each digits by %10 and update g using Match.floor.
///add each individual digits to a variable and return the variable at the end
const g = 4927;
function sumOfAllDigits(g) {
  let sum = 0;
  while (g > 0) {
    let digit = g % 10;
    g = Math.floor(g / 10);
    sum += digit;
  }
  return sum;
}
console.log(sumOfAllDigits(g));

//Given a string s, return true if the string is a palindrome (reads the same forward and backward), and false otherwise.
//Ignore case while checking.
const str = "Level";
function checkingPalindrome(str) {
  let lowerStr = str.toLowerCase();
  let splitted = lowerStr.split("");
  let rev = [];
  for (let i = splitted.length - 1; i >= 0; i--) {
    rev.push(splitted[i]);
  }
  return rev.join("") === lowerStr;
}
console.log(checkingPalindrome(str));

//Given an array of positive integers arr and a positive integer k,
//return a new array containing all numbers from arr whose sum of digits is strictly greater than k.
const arrIn = [34, 52, 19, 8, 123];
const K = 7;
function filterByDigitSum(arrIn, K) {
  let outArr = [];
  for (let i = 0; i < arrIn.length; i++) {
    let num = arrIn[i];
    let sum = 0;
    if (arrIn[i] > 0) {
      while (num > 0) {
        let digit = num % 10;
        num = Math.floor(num / 10);
        sum += digit;
      }
    }
    if (sum > K) {
      outArr.push(arrIn[i]);
    }
  }
  return outArr;
}
console.log(filterByDigitSum(arrIn, K));

//Given an array of positive integers arr, return the count of numbers whose sum of digits is a prime number.
///Logic: loop through the array
///collect digit by %10 and get sum of all the digits
///if the sum is prime then increase counter;
const numbs = [23, 41, 58, 7, 999, 13];
function countPrimeDigitSum(numbs) {
  let counter = 0;
  for (let i = 0; i < numbs.length; i++) {
    let digitSum = 0;
    let n = numbs[i];
    while (n > 0) {
      let digit = n % 10;
      digitSum += digit;
      n = Math.floor(n / 10);
    }
    if (digitSum > 1) {
      let isPrime = true;
      for (let div = 2; div < digitSum; div++) {
        if (digitSum % div === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) counter++;
    }
  }
  return counter;
}
console.log(countPrimeDigitSum(numbs));
