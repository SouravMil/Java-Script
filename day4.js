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
const arrInp = [5,6,9,8,7,4,5,6,3,2,1,2,3,1,4,5,6,1,2]//[4, 2, 7, 2, 9, 4];
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
   if(freq[arrInp[i]] > 1 && arrInp[i]<smallest)
   {
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
const inpStr = 'We test code daily based on last exp';
function longestWords(inpStr)
{
    const wordsArr = inpStr.split(' ');
    let longestLength = 0;
    let longList = [];
    for(word of wordsArr)
    {
        if(word.length>longestLength)
        {
            longestLength = word.length;
            longList = [word];
        }
        else if(word.length === longestLength)
        {
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
const fruitInp = ["apple", "banana", "apple", "orange", "banana", "apple"]
function multipleOccurance(fruitInp)
{
    let freq = {};
    let multiFruit = []; 
    for(let fruit of fruitInp)
    {
        freq[fruit] = (freq[fruit] || 0)+1
    }
    for(let obj in freq)
    {
        if(freq[obj] > 1)
        {
            multiFruit.push(obj)
        }
    }
    return multiFruit;
}
console.log(multipleOccurance(fruitInp))