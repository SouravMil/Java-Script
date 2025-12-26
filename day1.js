//Given a string find the 1st character that does not repeat. If none exist, return null
const inpString = 'aabbcdd';
//output = 'c';
//edge cases - no unique character(null), all unique characters(1st char), single character(same char)
function uniqueChar(inpString)
{
    //Iterate through string
    let frequency = {};
    let uniqueChar = '';
    for(ch of inpString)
    {
        if(frequency[ch] === undefined)
        {
            frequency[ch] = 1;
        }
        else{
            frequency[ch] = frequency[ch]+1;
        }
    }
    for(ch of inpString)
    {
        if(frequency[ch] === 1)
        {
            uniqueChar = ch;
            break;
        }
        else{
            return null;
        }
    }
    return uniqueChar;
    //count frequency of each characters
    //freq = 1, then return char
}
console.log(uniqueChar(inpString));

//Given a sentence return the longest word in the sentence
const inpSentence =  'I love JavaScript' //string (sentence)
//Output = //string (longestWord) // Javascript
//split through space
//word length 
//compare and return the longest
const processedArr = inpSentence.toLowerCase().split(' ');
function longestWord(processedArr)
{
    let longest = '';
    for(word of processedArr)
    {
        if(longest.length>word.length)
        {
            return 'The longest word is '+longest;
        }
        longest = word;
    }
    return longest;
}
console.log(longestWord(processedArr));

//reversing 123
let rev = 0;
let n = 123;

while(n>0)
{
    let digit = n % 10;
    rev = rev*10+digit;
    n = Math.floor(n/10);
}
console.log(rev);

//Check if a number is a palindrome
let reverse = 0;
let m = 123;

while(m>0)
{
    let digit = m%10;
    reverse = reverse*10+digit;
    m = Math.floor(m/10);
}
if(reverse === m)
{
    console.log('The input number is a palindrome');
}
else{
    console.log('Input number is not a palindrome');
}

//factorial of a number
let p = 5;
let output = 1;
//output = 5*4*3*2*1 = 120;

while(p>1)
{
    output = output*p
    p=p-1;
}
console.log(output);

//check armstrong number
const arm = 370;
let t = arm;
let count = 0;
let digit = 0;
//output = 3**3+7**3 = 370;

while(t>0)
{
    t = Math.floor(t/10);
    count++
}
console.log(count);

//check the count of vowel
const inp = 'JavaScript is powerful';
const processed = inp.toLowerCase();
const vowel = 'aeiou';
let finalCount = {a:0,e:0,i:0,o:0,u:0};

function vowelCount(processed)
{
    for(let char of processed)
    {
        if(vowel.includes(char))
        {
            finalCount[char] = finalCount[char]+1
        }
    }
    return finalCount;
}
console.log(vowelCount(processed));

//reverse each word in a sentence
const str = 'JS logic drills are fun';
const splitStr = str.split(' ');
let resultArr = [];

function reverseWord(splitStr)
{
    for(let i=0;i<splitStr.length;i++)
    {
        let revString = '';
        for(let j=splitStr[i].length-1;j>=0;j--)
        {
            revString += splitStr[i][j];
        }
        resultArr.push(revString);
    }
    return resultArr.join(' ');
}
console.log(reverseWord(splitStr));

// Count words with length >3 
const exInp = 'JS logic drills are fun';
const splitExInp = exInp.split(' ');

function longerWords(splitExInp)
{
    let counter = 0;
    for(strng of splitExInp)
    {
        if(strng.length > 3)
        {
            counter++;
        }
    }
    return counter;
}
console.log(longerWords(splitExInp));

//find the longest word in the sentence
const string = 'I am practicing JavaScript logic daily';
const splitted = string.split(' ');


function longestWord(splitted)
{
    let result = [];
    let longest = splitted[0];
    result.push(longest)
    for(let i=1;i<splitted.length;i++)
    {
        if(splitted[i].length>longest.length)
        {
            longest = splitted[i];
            result = [longest];
        }
        else if(splitted[i].length === longest.length)
            {
                result.push(splitted[i])
            }   
    }
    return result;
}
console.log(longestWord(splitted))

//Count the frequency of each character in a string
const exStr = 'I am practicing JavaScript logic daily'
const procexStr = exStr.toLowerCase().replaceAll(' ','').split('');


function frequencyCount(procexStr)
{
    let freq1 = {};
    for(char of procexStr)
    {
        if(freq1[char])
        {
            freq1[char] = freq1[char]+1;
        }
        else{
            freq1[char] = 1;
        }
    }
    return freq1;
}
console.log(frequencyCount(procexStr));

//Remove all duplicate characters from a string and return the result.

function removeDuplicate(procexStr)
{
    let result1 = '';
    for(let i=0;i<procexStr.length;i++)
    {
        if(!result1.includes(procexStr[i]))
        {
            result1 += procexStr[i];
        }
    }
    return result1;
}
console.log(removeDuplicate(procexStr));
 

