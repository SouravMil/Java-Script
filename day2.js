//Find the second largest unique number in the array
const num = [10, 5, 20, 8, 20];
let largest = num[0];
let secLargest = num[0];

function secondLargest(num) {
  for (let i = 1; i < num.length; i++) {
    if (num[i] > largest) {
      secLargest = largest;
      largest = num[i];
    } else if (num[i] > secLargest && num[i] !== largest) {
      secLargest = num[i];
    }
  }
  return secLargest;
}
console.log(secondLargest(num));

//Given an array of numbers. Check if it is sorted in ascending order.
const numArr = [10, 10, 10, 13, 4];
//Edge cases: one number ([1] - true), repeated number ([0,1,1,0,1] - false, empty array([]), decending number - false)
////logic
////1st number should be lesser than 2nd number
////2nd should be lesser than 3rd
////if prev<next => then return true
////else return false.

function ascnedingCheck(numArr) {
  for (let i = 0; i < numArr.length - 1; i++) {
    let curr = numArr[i];
    let nxt = numArr[i + 1];
    if (curr > nxt) {
      return false;
    }
  }
  return true;
}
console.log(ascnedingCheck(numArr));

//find the first pair of numbers whose sum is 0. Return the pair, not the index.
const numb = [3, -1, -3, 2, 1];
//1st number. Iterate from 2nd number till end and sum.
//if sum =0 then return 1st number and number.
//else return null;

function pairSum(numb) {
  let pair = [];
  for (let i = 0; i < numb.length; i++) {
    for (let j = i + 1; j < numb.length; j++) {
      if (numb[i] + numb[j] === 0) {
        pair.push(numb[i], numb[j]);
        return pair;
      }
    }
  }
  return null;
}
console.log(pairSum(numb));

//Find the first missing positive number.
const numArr1 = [7, 8, 9, 11, 12];

function firstMissingPositive(numArr1) {
  let n = numArr1.length;
  for (let i = 1; i < n + 1; i++) {
    let found = false;
    for (let j = 0; j < n; j++) {
      if (numArr1[j] === i) {
        found = true;
        break;
      }
    }
    if (!found) {
      return i;
    }
  }
}
console.log(firstMissingPositive(numArr1));

//Given a sentence string, find the count of words whose first and last characters are the same.
const givenStrn = "level madam teaches malayalam at noon";
//output = 4
//split by ' '
//loop through all words
///split by ''
///compare the 1st and last characters are the same.
///if same then count++
///return count
const splitedGiven = givenStrn.toLowerCase().split(" ");

function similarCharacters(splitedGiven) {
  let counter = 0;
  for (let i = 0; i < splitedGiven.length; i++) {
    let characters = splitedGiven[i].split("");
    if (characters[0] === characters[characters.length - 1]) {
      counter++;
    }
  }
  return counter;
}
console.log(similarCharacters(splitedGiven));

//Given an array of numbers, convert each number to string and 
//count how many numbers contain more than one repeated digit.
const digitArr = [121, 456, 1223, 898, 90]
//output = 3;
//covert to string
//loop through each

function repeatedDigit(digitArr)
{
  let counter = 0;
  for(let i=0;i<digitArr.length;i++)
  {
    let hasRepeat = false;
    let numbtoString = digitArr[i].toString();
    let chars = numbtoString.split('');
    for(let j=0;j<chars.length;j++)
    {
      for(let p=j+1;p<chars.length;p++)
      {
        if(chars[j] === chars[p])
        {
          hasRepeat = true;
          break;
        }
      }
      if (hasRepeat) break;
    }
    if (hasRepeat)
    {
      counter++;
    }
  }
  return counter;
}
console.log(repeatedDigit(digitArr));

//Given a sentence, return the longest word that has no repeating characters.
//If multiple exist, return all of them in an array.
const inpStrn = 'JS logic drills are super fun'
//output = ['logic', 'super']
//split by ' '
//loop through and find longest. Push it to a temp variable
//loop through the temp variable and check if any repeating characters present

function findlongestNonRepeatingCharacters(inpStrn)
{
  const splitted = inpStrn.toLowerCase().split(' ');
  let allLongest = [];
  let tempLongest = '';
  let currLongest = splitted[0].length;
  for(let i=1;i<splitted.length;i++)
  {
    if(splitted[i].length > currLongest)
    {
      let splitString = splitted[i].split('');
      for(let j=0;j<splitString.length;j++)
      {
        for(let p=1;p<splitString.length;p++)
        {
          if(splitString[j] !== splitString[p])
          {
            return splitted[i];
          }
        }
      }
      currLongest = splitted[i].length;
      tempLongest = splitted[i];
    }
    allLongest.push(tempLongest);
  }
  return allLongest;
}
console.log(findlongestNonRepeatingCharacters(inpStrn));