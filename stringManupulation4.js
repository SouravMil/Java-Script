// Input: arr[] = [0, 0, 1, 0, 1, 0]
// Output: 2
const arr1 = [0, 0, 1, 0, 1, 0];
let currNumb1 = arr1[0];
let count1 = 1;
let maxCount1 = 0;
let result1 = 0;

for(let i=1;i<arr1.length;i++)
{
    if(currNumb1 === arr1[i])
    {
        count1++;
    }
    else{
        if(count1>maxCount1)
        {
            maxCount1 = count1;
            result1 = currNumb1;
        }
        currNumb1 = arr1[i];
        count1 = 1;
    }
}
if(count1>maxCount1)
        {
            maxCount1 = count1;
            result1 = currNumb1;
        }
console.log(`The length of the longest contiguous sequence is of ${currNumb1} and the frequency is ${maxCount1}`);

//Problem: Reverse Words in a Sentence (Not Characters)
//Given a string sentence, reverse the order of the words, but do NOT reverse the characters inside each word.
const str2 = 'JavaScript is awesome';
const processed = str2.split(' ').reverse().join(' ');
console.log(processed);

//Problem: Find the Missing Number from 1 to N
//You are given an array containing numbers from 1 to N, but exactly one number is missing.
const arr2 =  [1,2,4,5];
let max=5;
let min=1;
let arr2Set = new Set(arr2);
let resArr = [];

for(let num=min+1;num<max;num++)
{
    if(!arr2Set.has(num))
    {
        resArr.push(num);
    }
}
console.log(resArr);

//Fibonacci 
function fibonacci(n){
    let arr=[0,1];

    for(let i=2;i<n;i++)
    {
        arr[i] = arr[i-1]+arr[i-2];
    }
    return arr;
}

console.log(fibonacci(5));


//reverse a string 
Input = 'sourav';
Output = 'varuos';

const myName = 'sourav'
const processedName = myName.split('').reverse().join('');
console.log(processedName);

//Find Maximum number in an array
const testArray = [3, 7, 1, 9, 4, 0, 8, 2, 6];
let outputTest = 0;
let maxNum = testArray[0];

for(let i=1;i<testArray.length;i++)
{
    if(maxNum>testArray[i])
    {
        outputTest = maxNum;
    }
    else{
        outputTest = testArray[i];
        maxNum = testArray[i];
    }
}
console.log(outputTest);

//Find the indices of 2 numbers such that they add up to the given target
const inpArr = [2,7,11,15,6,3];
const target1 = 9;
let outArr = [];

for(let i=0;i<inpArr.length;i++)
{
    for(let j=i+1;j<=inpArr.length;j++)
    {
        if(target1 === inpArr[i]+inpArr[j])
        {
            outArr.push([inpArr.indexOf(inpArr[i]),inpArr.indexOf(inpArr[j])])
        }
    }
}
console.log(outArr);

//Count vowels in a string
const sentence = 'A quick brown fox jumps over the lazy dog.';
//Output = 11;
//edge cases - 0 vowels, all vowels, empty string, upperCase;

//vowels = 'aeiou'
const vowels = 'aeiou'
let vowelCount = 0;
//convert Input to lowercase //Break the sentence into array of characters
const processedString = sentence.toLowerCase();
//'vowels' has the character
for(let i=0;i<processedString.length;i++)
{
    // if yes - count++
    if(vowels.includes(processedString[i]))
    {
        vowelCount++;
    }
    //if no - count=0;
}
// output count='';
console.log("Total count of vowels are "+vowelCount);

//create a function to count vowel
const inputString = 'AAAEEEEIIIOOOOOUUU';
const vowels1 = 'aeiou';
function vowelCount1(inputString)
{
    let lowerString = inputString.toLowerCase();
    let vowel = 0;
    for(char of lowerString)
    {
        if(vowels1.includes(char))
        {
            vowel++;
        }
    }
    return vowel;
}
console.log("This is checking vowels count through function");
console.log(vowelCount1(inputString));

//Remove duplicates from an array
const arrInput = [1,1,2,2,3,3,4,4,5,5,6,6,7,8,9,]
let outArray = [];
//Output = [1,2,3,4,5,6,7,8,9]
//empty array, single element, all duplicates

let setArr = new Set(arrInput);
console.log(setArr);

let seen = new Set();
function removeDuplicate(arrInput)
{
    //Iterate through array
    for(item of arrInput)
    {
        if(!seen.has(item))
        {
            outArray.push(item);
            seen.add(item);
        }
    }
    return outArray;
}
//if seen earlier then remove
//if not then add
console.log("This is removing duplicate through function "+ removeDuplicate(arrInput));

//Find maximum number in an array
const numbArr = [1,2,3,55,66,4,-8,-66,200,23]
//Output = 200;
let maxNumber = 0;
//edge case = all -ve numbers, floated value
let curr = numbArr[0];
function maxNumb(numbArr)
{
    //iterate through array
    for(let i=1;i<numbArr.length;i++)
    {
        //check if curr>next
        if(curr>numbArr[i]) ///if yes return curr
        {
            maxNumber = curr;
        }
        else{
            curr = numbArr[i]; /////else return next
        }
    }
    return maxNumber;
}
console.log(maxNumb(numbArr));










