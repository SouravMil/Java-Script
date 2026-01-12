//Given a string, find the first character that does NOT repeat.
//If all characters repeat, return -1.
//a variable output(blank string)
//loop through the string and check if the current character is present anywhere else
// if not, return the current character and break the loop
const strInp = "aabbccdde";
function firstUniqueCharacter(strInp) {
  let output = "";
  for (let i = 0; i < strInp.length; i++) {
    let isUnique = true;
    for (let j = 0; j < strInp.length; j++) {
      if (i !== j && strInp[j] === strInp[i]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique === true) {
      output = strInp[i];
      return output;
    }
  }
  return -1;
}
console.log(firstUniqueCharacter(strInp));

//Given an array of numbers, return the smallest number that appears more than once. //Assignment 11
//If there is no repeating number, return -1.
///Logic: Loop through the array and get the smallest number
///if condition (smallest number present more than once in different index)
///return the number
const arrInp = [5, 6, 9, 8, 7, 4, 5, 6, 3, 2, 1, 2, 3, 1, 4, 5, 6, 1, 2]; //[4, 2, 7, 2, 9, 4];
function multipleOccuranceSmallestNumber(arrInp) {
  let smallest = Infinity;
  let freq = {};
  for (let digit of arrInp) {
    if (freq[digit]) {
      freq[digit] = freq[digit] + 1;
    } else {
      freq[digit] = 1;
    }
  }
  for (let i = 0; i < arrInp.length; i++) {
    if (freq[arrInp[i]] > 1 && arrInp[i] < smallest) {
      smallest = arrInp[i];
    }
  }
  return smallest === Infinity ? -1 : smallest;
}
console.log(multipleOccuranceSmallestNumber(arrInp));

//Given a string, find the longest word in the string.
//If there are multiple longest words, return all of them.
///split by ' '. Loop through the array and find the longest.
///Compare if there is multiple words with same length
///store all of them in an array.
const inpStr = "We test code daily based on last exp";
function longestWords(inpStr) {
  const wordsArr = inpStr.split(" ");
  let longestLength = 0;
  let longList = [];
  for (word of wordsArr) {
    if (word.length > longestLength) {
      longestLength = word.length;
      longList = [word];
    } else if (word.length === longestLength) {
      longList.push(word);
    }
  }
  return longList;
}
console.log(longestWords(inpStr));

//Given an array of strings, return a new array containing only the strings that appear more than once.
///loop through the array.
///count frequency of each fruits.
///return all fruits which appears more than one
const fruitInp = ["apple", "banana", "apple", "orange", "banana", "apple"];
function multipleOccurance(fruitInp) {
  let freq = {};
  let multiFruit = [];
  for (let fruit of fruitInp) {
    freq[fruit] = (freq[fruit] || 0) + 1;
  }
  for (let obj in freq) {
    if (freq[obj] > 1) {
      multiFruit.push(obj);
    }
  }
  return multiFruit;
}
console.log(multipleOccurance(fruitInp));

//Given a string, reverse each word, but keep the word order the same.
///logic: split the entire string by ' '.
///loop through the array of words.
///another loop or .reverse() to reverse the chunk and store the reversed chunk
///at the end join all the reveresed chunk bu ' ' and return the final outout
const InputStr = "JS logic drills are fun";
function reverseEachWord(InputStr) {
  let wordChunk = InputStr.split(" ");
  let revChunkArr = [];
  for (let i = 0; i < wordChunk.length; i++) {
    let revChunk = wordChunk[i].split("").reverse().join("");
    revChunkArr.push(revChunk);
  }
  return revChunkArr.join(" ");
}
console.log(reverseEachWord(InputStr));

function reverseUsingLoop(InputStr) {
  let wordChunk = InputStr.split(" ");
  let revChunkArr = [];
  for (let i = 0; i < wordChunk.length; i++) {
    let word = wordChunk[i].split("");
    let revWord = [];
    for (let j = word.length - 1; j >= 0; j--) {
      revWord.push(word[j]);
    }
    revChunkArr.push(revWord.join(""));
  }
  return revChunkArr.join(" ");
}
console.log(reverseUsingLoop(InputStr));

//Given an array of strings, group the anagrams together.
///logic: loop through each words
///1st condition: Compare 2 words and make sure both length are same /// ['e','a','t'],
///2nd condition: split the word and check if each character exists in any other words.
const rawArr = ["eat", "tea", "tan", "ate", "nat", "bat"];
function anagramsTogether(rawArr) {
  let outputArr = [];
  for (let i = 0; i < rawArr.length; i++) {
    let primary = rawArr[i].split("");
    for (let j = i + 1; j < rawArr.length; j++) {
      let isAnagram = true;
      if (rawArr[i].length === rawArr[j].length) {
        for (let p = 0; p < primary.length; p++) {
          if (!rawArr[j].includes(primary[p])) {
            isAnagram = false;
            //outputArr.push([rawArr[i], rawArr[j]]);
          }
        }
        if (isAnagram) {
          outputArr.push([rawArr[i], rawArr[j]]);
        }
      }
    }
  }
  return outputArr;
}
console.log(anagramsTogether(rawArr));

function anagramsGroupTogether(rawArr) {
  let outputArr = [];
  let visited = new Array(rawArr.length).fill(false); // track words already grouped

  for (let i = 0; i < rawArr.length; i++) {
    if (visited[i]) continue; // skip if already grouped

    let group = [rawArr[i]]; // start a new group
    visited[i] = true;
    let sortedPrimary = rawArr[i].split("").sort().join(""); // sort letters of primary word

    for (let j = i + 1; j < rawArr.length; j++) {
      if (visited[j]) continue;

      // sort letters of the comparison word
      let sortedCompare = rawArr[j].split("").sort().join("");
      if (sortedPrimary === sortedCompare) {
        group.push(rawArr[j]);
        visited[j] = true;
      }
    }
    outputArr.push(group); // push the group
  }
  return outputArr;
}
console.log(anagramsGroupTogether(rawArr));

//Given a string, capitalize the first letter of each word.
const lowerStr = "js logic drills are fun";
function capitalizeFirstLetter(lowerStr) {
  const lowerArr = lowerStr.split(" ");
  let output = [];
  let processedStr = "";
  for (let i = 0; i < lowerArr.length; i++) {
    let remainingLast = lowerArr[i].slice(1);
    let firstChar = lowerArr[i][0];
    processedStr = firstChar.toUpperCase() + remainingLast;
    output.push(processedStr);
  }
  return output.join(" ");
}
console.log(capitalizeFirstLetter(lowerStr));

//Given an array of numbers, return a new array containing only the numbers that are prime.
//loop through the array
//if number%number and reminder is 0 and number%1 and reminder is 0. then number is prime.
//put them in an array and return the array.
const numArr = [2, 3, 4, 5, 10, 11, 15, 17];
function primeNumbers(numArr) {
  let output = [];
  for (let i = 0; i < numArr.length; i++) {
    let n = numArr[i];
    let isPrime = true;
    if (n < 2) isPrime = false;
    for (let d = 2; d < n; d++) {
      if (n % d === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      output.push(n);
    }
  }
  return output;
}
console.log(primeNumbers(numArr));

//Given a number n, return the first n prime numbers in an array.
function firstnPrimenumbers()
{
  let n=5;
  let currentNumber = 2;
  let outPutNPrime = [];
  while(outPutNPrime.length<n)
  {
    let isPrime = true;
    //check if the currNum is divisible by any number from 2 to currnum-1
    for(let div=2;div<currentNumber;div++)
    {
      if(currentNumber%div === 0)
      {
        isPrime = false;
        break;
      }
    }
    if(isPrime)
    {
      outPutNPrime.push(currentNumber);
    }
    currentNumber++;
  }
  return outPutNPrime;
}
console.log(firstnPrimenumbers());

//Given a number n, return all prime numbers from 1 to n.
function allPrimeNumb()
{
  let n=20;
  let primeArr = [];
  let currNumb = 2;
  while(currNumb<n)
  {
    let isPrime = true;
    for(let div=2;div<currNumb;div++)
    {
      if(currNumb%div === 0)
      {
        isPrime=false;
        break;
      }
    }
    if(isPrime)
    {
      primeArr.push(currNumb);
    }
    currNumb++;
  }
  return primeArr;
}
console.log(allPrimeNumb());

//Given a number n, find the sum of all prime numbers from 1 to n.
function sumOfPrime()
{
  let n=10;
  let sum = 0;
  let currntNumb = 2;
  while(currntNumb<n)
  {
    let isPrime = true;
    for(let div=2;div<currntNumb;div++)
    {
      if(currntNumb%div === 0)
      {
        isPrime = false;
        break;
      }
    }
    if(isPrime)
    {
      sum += currntNumb;
    }
    currntNumb++;
  }
  return sum;
}
console.log(sumOfPrime());
