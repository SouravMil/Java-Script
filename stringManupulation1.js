//1. Reverse a String
// Input: "javascript"
// Output: "tpircsavaj"
const mainStr = 'javascript';
let revStr = '';
for(let i=mainStr.length - 1; i>=0; i--)
{
    revStr += mainStr[i];
}
console.log(revStr);

// //2. Count Vowels
// Input: "TechGun Academy"
// Output: 5
const inp = "TechGun Academy";
const vowels = ['a','e','i','o','u'];
let vowelCount = 0;
let lowerInp = inp.toLowerCase();

for(let i=0;i<lowerInp.length;i++)
{
    if(vowels.includes(lowerInp[i]))
    {
        vowelCount++;
    }
}
console.log(vowelCount);

// Convert First Letter to Uppercase
// Input: "hello world"
// Output: "Hello world"
const lowInp = 'hello world';
const output = lowInp[0].toUpperCase()+lowInp.slice(1);
console.log(output);


// 4. Remove Extra Spaces
// Input: " Sourav Kumar "
// Output: "Sourav Kumar"
const faultyStr = " Sourav Kumar ";
const fixedStr = faultyStr.trim();
console.log(fixedStr);

// 5. Check Palindrome
// Input: "madam" → true
// Input: "hello" → false
const parentStr = 'busub';
let revString = '';
for(let i=parentStr.length - 1; i>=0; i--)
{
    revString += parentStr[i];
}
if(revString === parentStr)
{
    console.log( `The string '${parentStr}' is a palindrome`);
}
else{console.log(`The string '${parentStr}' is not a palindrome`)}

// 6. Find Longest Word
// Input: "I am learning javascript from youtube"
// Output: "javascript"
const str1 = 'I am learning javascript from youtube';
const str1Arr = str1.split(" ");
let longestWord = '';
let maxLength = 0;
for(item of str1Arr)
{
    const itemLength = item.length;
    if(itemLength>maxLength)
    {
        longestWord = item;
        maxLength = itemLength;
    }
}
console.log(longestWord);


// Character Frequency
// Input: "aabbbcdd"
// Output:
// {
//   a: 2,
//   b: 3,
//   c: 1,
//   d: 2
// }
const inputString = "aabbbcdd";
let count = {};
for(it of inputString)
{
    if(count[it])
    {
        count[it] = count[it]+1
    }
    else{count[it] = 1}
}
console.log(count);

// Replace All Occurrences
// Input:
// str = "JS is good. JS is powerful."
// Output:
// "JavaScript is good. JavaScript is powerful."
const mainString = 'JS is good. JS is powerful.';
const finalString = mainString.replaceAll('JS','JavaScript');
console.log(finalString);

// 9. Capitalize Every Word
// Input: "i am learning string manipulation"
// Output: "I Am Learning String Manipulation"
const str2 = 'i am learning string manipulation';
const str2Arr = str2.split(' ');
let finStr2 = [];
for (item of str2Arr)
{
    let revisedItem = item[0].toUpperCase()+item.slice(1);
    finStr2.push(revisedItem);
}
const finalString2 = finStr2.join(' ');
console.log(finalString2);

// 10. String Compression
// Input: "aaabbccccd"
// Output: "a3b2c4d1"
const str3 = 'aaabbccccd';
let rslt = '';
let count1 =1;
for(let i=0;i<str3.length;i++)
{
    if(str3[i] === str3[i+1])
    {
        count1++;
    }
    else{
        rslt += str3[i]+count1;
        count1 = 1;
    };
}
console.log(rslt);

//Count Consecutive Characters
const Input = "aaabbcdd";
let currentChar = Input[0];
let count5 = 1;
let finCount = [];
for (let i=1;i<Input.length;i++)
{
    if(Input[i] === currentChar )
    {
        count5++;
    }
    else{
        finCount.push({char:currentChar,count:count5});
        currentChar = Input[i];
        count5 = 1;
    }
}
finCount.push({char:currentChar,count:count5});
console.log(finCount);

//Remove Consecutive Duplicates
// Input: "aaabbccccd"
// Output: "abcd"

// //Given a binary array arr[] consisting of only 0s and 1s, 
// find the length of the longest contiguous sequence of either 1s or 0s in the array.
//  
// Input: arr[] = [0, 1, 0, 1, 1, 1, 1]
// Output: 4
// Explanation: The maximum number of consecutive 1’s in the array is 4 from index 3-6.
//  
// Input: arr[] = [0, 0, 1, 0, 1, 0]
// Output: 2
// Explanation: The maximum number of consecutive 0’s in the array is 2 from index 0-1.

const str8 = [0, 1, 0, 1, 1, 1, 1]
let currNumb8 = str8[0];
let count8 = 1;
let maxcount8 = 0;
let finalNumb8 = 0;

for(let i=1;i<str8.length;i++)
{
    if(currNumb8 === str8[i])
    {
        count8++;
    }
    else{
        if(count8>maxcount8)
        {
            maxcount8 = count8;
            finalNumb8 = currNumb8;
        }
        count8 = 1;
        currNumb8 = str8[i];
    }
}
if(count8>maxcount8)
{
    maxcount8 = count8;
    finalNumb8 = currNumb8;
}
console.log(`The longest contiguous sequence comes for ${finalNumb8}, frequency is ${maxcount8}`);

//Find the set of missing numbers 
const arr = [3, 7, 1, 4, 7, 3, 8, 1, 4, 8, 3, 7, 4];
const arrSet = new Set(arr);
let missingArr = [];

for(let i=1;i<=9;i++)
{
    if(!arrSet.has(i))
    {
        missingArr.push(i);
    }
}
console.log(missingArr);


//Remove Consecutive Duplicates
const consecutive = 'aaabbccddeeeff';
let consecutiveOut = [...new Set(consecutive)].join('');
console.log(`This after removing conscutive characters ${consecutiveOut}`);

//Find the smallest missing positive number in the array
const arr1 = [3, 4, -1, 1];
const arr1Set = new Set(arr1);
let finalArr = [];

let smallestMissing = 1;

while(arr1Set.has(smallestMissing)){
    smallestMissing++
}
console.log(smallestMissing);

//Find all numbers missing in a sorted range using a single loop.
const arr2 = [1, 2, 4, 7, 8, 10];
let arrOut2 = [];

for(let i=0;i<arr2.length-1;i++)
{
    let curr = arr2[i];
    let next = arr2[i+1];
    for(let num = curr+1; num<next ; num++)
    {
        arrOut2.push(num);
    }
}
console.log(arrOut2);

//Missing Characters in Alphabet
const str9 = "the quick brown fox";
const ref = 'abcdefghijklmnopqrstuvwxyz';
let resultStr9 = [];

let str9Processed = str9.replaceAll(' ','').toLowerCase();

const str9Set = new Set(str9Processed);

for(letter of ref)
{
    if(!str9Set.has(letter))
    {
        resultStr9.push(letter)
    }
}
console.log(resultStr9);

//Count Missing Numbers Between Min and Max
const arr10 = [7, 3, 10, 3, 8, 6];
const arr10Set = new Set(arr10);
let min = 3;
let max = 10;
let missingCount = 0;

for(let num=min+1; num<max ; num++)
{
    if(!arr10Set.has(num))
    {
        missingCount++;
    }
}
console.log(missingCount);

//Find First Repeating Character in a String
const str11 = "javascript";
let setStr11 = new Set();
let result = '';

for(let i=0;i<str11.length;i++)
{
    if(setStr11.has(str11[i]))
    {
        result = str11[i];
        break;
    }
    else{
        setStr11.add(str11[i])
    }
}
console.log(result);

//First Non-Repeating Character in a String
//Given a string, find the first character that does NOT repeat anywhere.
const str13 = 'swiss';
let freq = {};
let result13 = '';

for(let ch of str13)
{
    freq[ch] = (freq[ch] || 0) +1;
}
for (let ch of str13)
{
    if(freq[ch] === 1)
    {
        result13 = ch;
        break;
    }
}
console.log(result13);


//Find All Pairs With Given Sum
//Given an array of numbers and a target sum, find all unique pairs that add up to the target.
const arr12 = [2, 4, 3, 5, 7, 8, 1];
const target = 7;
let result122 = [];

for(let i=0;i<arr12.length;i++)
{
    for(let j=i+1;j<arr12.length;j++)
    {
    if(arr12[i] + arr12[j] === target)
    {
        result122.push([arr12[i],arr12[j]])
    }
}
}
console.log(result122);
