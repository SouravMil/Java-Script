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

//


