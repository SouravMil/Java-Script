//Rotate an array to the LEFT by k steps
const arr =  [1, 2, 3, 4, 5] 
//5,4,3,2,1  //3,4,5,1,2
const k = 2;
function rotateToLeft(arr,k)
{
    //helper function
    function arrOpr(array,start,end)
    {
        while(start<end)
        {
            [array[start],array[end]] = [array[end],array[start]];
            start++;
            end--;
        }
    }
    k%= arr.length;
    arrOpr(arr,0,k-1);
    arrOpr(arr,k,(arr.length-1));
    arrOpr(arr,0,(arr.length-1));
    

    return arr;
}
console.log(rotateToLeft(arr,k));

//Find the length of the longest substring without repeating characters
const str = "abcabcbb";
function longestSubstring(str)
{
    let maxLength = 0;
    
    for(let i=0;i<str.length;i++)
    {
        let map = {};
        let currentLength = 0;
        for(let j=i;j<str.length;j++)
        {
            let char = str[j];
            if(map[char])
            {
                break;
            }
            map[char] = true;
            currentLength++;
        }
        maxLength = Math.max(maxLength, currentLength);
    }
    return maxLength;
}
console.log(longestSubstring(str));

//Find the element that appears most frequently in an array
const numArr =  [1, 3, 2, 3, 4, 3, 5, 2];
function mostFrequentElement(numArr)
{
    let freq = {};
    for(let num of numArr)
    {
        freq[num] = (freq[num]||0)+1;
    }
    let mostFreq = 0;
    let maxFreq = 0;
    for(let num of numArr)
    {
        if(freq[num]>maxFreq)
        {
            maxFreq = freq[num];
            mostFreq = num;
        }
    }
    return mostFreq;
}
console.log(mostFrequentElement(numArr))

//Find the product of all elements in an array except the current element
const numb = [1, 2, 3, 4];
function productOfElements(numb)
{
    let outNumb = [];
    for(let i=0;i<numb.length;i++)
    {
        let product = 1;
       for(let j=0;j<numb.length;j++)
       {
        if(i !== j)
        {
            product *= numb[j];
        }
       }
       outNumb.push(product);
    }
    return outNumb;
}
console.log(productOfElements(numb));

//Given an array, move all 0s to the end without changing the order of non-zero elements.
const exArr = [0, 1, 0, 3, 12];
function shiftAllZeros(exArr)
{
    let map = {};
    for(let num of exArr)
    {
        map[num] = (map[num]||0)+1
    }
    let outPut = [];
    for(let num of exArr)
    {
        if(num !== 0)
        {
            outPut.push(num);
        }
    }
    for(let i=0;i<(map[0]||0);i++)
    {
        outPut.push(0);
    }
    return outPut;
}
console.log(shiftAllZeros(exArr));

//Find the longest word in a given sentence.
const inp = "I am learning JavaScript daily"
function longestWord(inp)
{
    const inpArr = inp.split(' ');
    let longest = inpArr[0];
    for(let i=1;i<inpArr.length;i++)
    {
        if(inpArr[i].length>longest.length)
        {
            longest = inpArr[i];
        }
    }
    return longest;
}
console.log(longestWord(inp));

//Check whether a number is a Perfect Number
const n=28;
function validatePerfectNumb(n)
{
    let div = 1;
    let divSum = 0;
    while(n>div)
    {
        if(n%div === 0)
        {
            divSum += div;
        }
        div++;
    }
    return divSum === n;
}
console.log(validatePerfectNumb(n));

//Check whether a string is a Palindrome
const string = "Madam";
function validatePalindrome(string)
{
    let lowerCase = string.toLowerCase();
    let revStrn = '';
    for(let i=lowerCase.length-1;i>=0;i--)
    {
        revStrn += lowerCase[i];
    }
    return lowerCase === revStrn;
}
console.log(validatePalindrome(string));

//Find the Missing Number in an array
// You are given an array containing numbers from 1 to n,
// but one number is missing.
// Return the missing number.
const input = [1, 2, 4, 5];
function findMissingNumber(input)
{
    let sum = 0;
    let n = input.length+1;
    let i = 1;
    while(i<=n)
    {
        sum += i;
        i++;
    }
    let arrSum = 0;
    for(let i=0;i<input.length;i++)
    {
        arrSum += input[i];
    }
    return sum - arrSum;
}
console.log(findMissingNumber(input));

//118