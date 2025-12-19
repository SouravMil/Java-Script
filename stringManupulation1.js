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


//Remove Consecutive Duplicates
const consecutive = 'aaabbccddeeeff';
let consecutiveOut = [...new Set(consecutive)].join('');
console.log(`This after removing conscutive characters ${consecutiveOut}`);
