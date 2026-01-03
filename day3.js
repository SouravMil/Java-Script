//Given a sentence, return the longest word that has no repeating characters.
//If multiple exist, return all of them in an array.

//output = ['logic', 'super']
//split by ' '
//loop through and find longest. Push it to a temp variable
//loop through the temp variable and check if any repeating characters present
const inpStrn = "JS logic drills are super fun";
const processedStrng = inpStrn.toLowerCase().split(" ");
function longestNoRepeating(processedStrng) {
  let maxlength = 0;
  let result = [];
  for(let i=0;i<processedStrng.length;i++)
  {
    let word = processedStrng[i];
    let chars = word.split('');
    let hasRepeat = false;
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
        if(hasRepeat) break;
    }
    if(!hasRepeat)
    {
        if(word.length>maxlength)
        {
            maxlength = word.length;
            result = [word];
        }
        else if(word.length === maxlength)
        {
            result.push(word);
        }
    }
  }
  return result;
}
console.log(longestNoRepeating(processedStrng));

//Given an array of strings, return all strings that are palindromes
//(read the same forward and backward).
//logic: loop through each words. 
//split through chars and reverse it. 
//compare if the original === new value. then palindrome and push it to a new array. 
const stringArr = ["level", "test", "madam", "js", "noon", "code"];
function allPalindrome(stringArr)
{
    let palindrome = [];
    for(let i=0;i<stringArr.length;i++)
    {
        let word = stringArr[i];
        let char = word.split('');
        let revword = '';
        for(let j=char.length-1;j>=0;j--)
        {
            revword += char[j];
        }
        if(revword === word)
        {
            palindrome.push(word);
        }
    }
    return palindrome;
}
console.log(allPalindrome(stringArr));

//Given an array of numbers, return the second largest unique number.
//If it doesn’t exist, return null.
//detect all the unique numbers first
//then compare each and store both largest and second largest numbers
//return only second largest.
const numArr = [5, 5, 4, 3];
function secondLargestUnique(numArr)
{
    let uniqueNumbs = [];
    for(let i=0;i<numArr.length;i++)
    {
        let isUnique = true;
        for(let j=0;j<numArr.length;j++)
        {
            if(i!==j && numArr[i] === numArr[j])
            {
                isUnique = false;
                break;
            }
        }
        if(isUnique)
        {
            uniqueNumbs.push(numArr[i]);
        }
    }
    if(uniqueNumbs.length < 2) return null;
    let largest = -Infinity;
    let secondLargest= -Infinity;
    for(let p=0;p<uniqueNumbs.length;p++)
    {
        if(uniqueNumbs[p]>largest)
        {
            secondLargest = largest;
            largest = uniqueNumbs[p];
        }
        else if(uniqueNumbs[p]>secondLargest && uniqueNumbs[p]<largest)
        {
            secondLargest = uniqueNumbs[p]
        }
    }
    return secondLargest;
}
console.log(secondLargestUnique(numArr));

//// //Given a binary array arr[] consisting of only 0s and 1s, 
// find the length of the longest contiguous sequence of either 1s or 0s in the array.
//  
// Input: arr[] = [0, 1, 0, 1, 1, 1, 1]
// Output: 4
// Explanation: The maximum number of consecutive 1’s in the array is 4 from index 3-6.

const binArr = [0, 1, 0, 1, 1, 1, 1];

function longestContiguous(binArr)
{
    let count = 1;
    let maxCount = 0;
    let currNum = binArr[0];
    let longestSequence = 0;
    for(let i=1;i<binArr.length;i++)
    {
        if(currNum === binArr[i])
        {
            count++;
        }
        else{
            if(count > maxCount)
            {
                maxCount = count;
                longestSequence = currNum;
            }
            count = 1;
            currNum = binArr[i];
        }
        
    }
    if(count > maxCount)
            {
                maxCount = count;
                longestSequence = currNum;
            }
    return {maxCount,longestSequence};
}

console.log(longestContiguous(binArr))

//Fibonacci of 22
function fibonacci22()
{
    let n=22;
    let fib22 = [0,1];
    for(let i=2;i<n;i++)
    {
        fib22[i] = fib22[i-1] + fib22[i-2];
        fib22.push(fib22[i]); 
    }
    return fib22;
}
console.log(fibonacci22());

//Given an array of numbers, find the second largest number in the array.
//detect all unique numbers
//detect the largest and second largest
//return second largest
const numInp = [10, 5, 20, 8, 20]
function findSecondLargest(numInp)
{
    let uniqueArr = [];
    for(let i=0;i<numInp.length;i++)
    {
        let isUnique = true;
        for(let j=0;j<numInp.length;j++)
        {
            if(i!=j && numInp[i] === numInp[j])
            {
                isUnique = false;
                break;
            }
        }
        if(isUnique)
        {
            uniqueArr.push(numInp[i]);
        }
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for(let p=0;p<uniqueArr.length;p++)
    {
        if(uniqueArr[p]>largest)
        {
            secondLargest = largest;
            largest = uniqueArr[p];
        }
        else if(uniqueArr[p]>secondLargest && uniqueArr[p]<largest)
        {
            secondLargest = uniqueArr[p];
        }
    }
    return secondLargest;
}
console.log(findSecondLargest(numInp));