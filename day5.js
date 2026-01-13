//Given a number n, return how many prime numbers exist from 1 to n.
function totalNumberofPrimes() {
  const n = 20;
  let currNumber = 2;
  let outputCounter = 0;
  while (currNumber < n) {
    let isPrime = true;
    for (let div = 2; div < currNumber; div++) {
      if (currNumber % div === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      outputCounter++;
    }
    currNumber++;
  }
  return outputCounter;
}
console.log(totalNumberofPrimes());

//Given a string, count how many vowels are in it.
const inpStr = "hello world";
function countVowels(inpStr) {
  let charArr = inpStr.toLowerCase().split("");
  const vowels = "aeiou";
  let vowelCount = 0;
  for (char of charArr) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }
  return vowelCount;
}
console.log(countVowels(inpStr));

//Given a positive integer n, return the sum of all even digits in the number.
///Logic: get digit by the process n%10.
///Divide the digit by 2 => if reminder is 0 then store in variable sum.
///for next number if the reminder is 0 then add and store in variable sum.
function sumAllEvenDigits() {
  let n = 53824;
  let sum = 0;
  while (n > 0) {
    let digit = 0;
    digit = n % 10;
    n = Math.floor(n / 10);
    if (digit % 2 === 0) {
      sum += digit;
    }
  }
  return sum;
}
console.log(sumAllEvenDigits());

//Given a string, return the character that appears most frequently.
//If multiple characters have the same highest frequency, return any one of them.
///logic: loop through the string and count the frequency of each characters
///again loop through the frequency and check which character has highest number. Return that.
const inpString = "javascript";
function returnMostFrequentCharacter(inpString) {
  let charArr = inpString.toLowerCase();
  let freq = {};
  for (char of charArr) {
    freq[char] = (freq[char] || 0) + 1;
  }
  let mostFrequent = "";
  let maxCount = 0;
  for (ch in freq) {
    if (freq[ch] > maxCount) {
      maxCount = freq[ch];
      mostFrequent = ch;
    }
  }
  return [mostFrequent, maxCount];
}
console.log(returnMostFrequentCharacter(inpString));

//Given an array of numbers, return a new array containing only the numbers that are perfect squares.
///logic: loop through the array,
///if square root of number is integer then push into output array
const inpNum = [1, 2, 3, 4, 9, 10, 16, 20];
function arrofSquares(inpNum) {
  let outputArr = [];
  for (let num of inpNum) {
    let sqroot = Math.sqrt(num);
    if (Number.isInteger(sqroot)) {
      outputArr.push(num);
    }
  }
  return outputArr;
}
console.log(arrofSquares(inpNum));

//Given a string, return a new string with all duplicate characters removed.
const wordStr = "banana";
function allUniqueCharacter(wordStr) {
  let seen = {};
  let outPut = "";
  for (let char of wordStr) {
    if (!seen[char]) {
      outPut += char;
      seen[char] = true;
    }
  }
  return outPut;
}
console.log(allUniqueCharacter(wordStr));

//Given a number n, check if the number is a perfect number.
//A number is perfect if the sum of all its proper divisors equals the number itself.
function validatePerfectNumber() {
  const n = 13;
  let sum = 0;
  for (let i = 1; i < n - 1; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum === n;
}
console.log(validatePerfectNumber());

//Given a string, return true if it is a palindrome, false otherwise.
///logic: split each character.
///reverse loop and store each character from last to first
///validate input === output; hence palindrome.
const inptStr = "hello";
function checkingPalindrome(inptStr) {
  let charArr = inptStr.toLowerCase().split("");
  let revWord = [];
  for (let i = charArr.length - 1; i >= 0; i--) {
    revWord.push(charArr[i]);
  }
  return charArr.join("") === revWord.join("");
}
console.log(checkingPalindrome(inptStr));

//Given an array of numbers, return the second largest number in the array.
///Logic: loop through the array. Find the largest number first.
///now find the number that is lower than largest but larger than rest of the numbers
///return that number.
const numArr = [10, 5, 20, 8, 15];
function findSecondLargest(numArr) {
  let largest = -Infinity;
  let secLargest = -Infinity;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > largest) {
      secLargest = largest;
      largest = numArr[i];
    } else if (secLargest < numArr[i] && largest > numArr[i]) {
      secLargest = numArr[i];
    }
  }
  return secLargest;
}
console.log(findSecondLargest(numArr));

//Given an array of numbers, return a new array containing only the numbers that are divisible by 3 OR 5.
///logic: loop through the array.
///check each number if it is divisible by 3 or 5
///return those numbers in an array
//1st solution technique
const arrNumb = [3, 10, 12, 7, 25, 30, 14];
function divisibleby3or5(arrNumb) {
  let outputArr = [];
  for (let i = 0; i < arrNumb.length; i++) {
    if (arrNumb[i] % 3 === 0 || arrNumb[i] % 5 === 0) {
      outputArr.push(arrNumb[i]);
    }
  }
  return outputArr;
}
console.log(divisibleby3or5(arrNumb));

//2nd solution technique
function divisibleby5or3(arrNumb) {
  const outArr = arrNumb.filter((num) => num % 3 === 0 || num % 5 === 0);
  return outArr;
}
console.log(divisibleby5or3(arrNumb));

//Given a positive integer n, return the count of digits in n that are even.
//pick digit one by one using %10 and check if divisible by 2. 
//update n using Math.floor. 
//This entire process in a while loop.
let n = 48291;
function countOfEvenDigits(n) {
  let counter = 0;
  while (n > 0) {
    let digit = n % 10;
    n = Math.floor(n / 10);
    if (digit % 2 === 0) {
      counter++;
    }
  }
  return counter;
}
console.log(countOfEvenDigits(n));

//Given a string, return a new string where the first and last letters of each word are swapped.
//Keep the word order the same.
///logic: split by (' '). loop through the words. 
///
const inpStrng = 'hello world'
function swappingFirstandLast(inpStrng)
{
    let words = inpStrng.split(' ');
    let tempWord = '';
    let finArr = [];
    for(let i=0;i<words.length;i++)
    {
        let firstLetter = words[i][0];
        let lastLetter = words[i][words[i].length-1];
        tempWord = lastLetter+words[i].slice(1,words[i].length-1)+firstLetter;
        finArr.push(tempWord);
    }
    return finArr.join(' ');
}
console.log(swappingFirstandLast(inpStrng));
