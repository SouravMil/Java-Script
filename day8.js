//Given a string s, return the number of characters that appear more than once.
//Ignore case.
//Characters must be counted only once even if they repeat many times.
const S = 'Programming';
function multiFreqCharacters(S)
{
  const newS = S.toLowerCase();
  let freq = {};
  for(let char of newS)
  {
    freq[char] = (freq[char]||0)+1
  }
  let outPutCount = 0;
  for(let char in freq)
  {
    if(freq[char]>1)
    {
      outPutCount++;
    }
  }
  return outPutCount;
}
console.log(multiFreqCharacters(S));

//Given an integer n, return the number of divisors of n.
///logic: a variable divisor, increase it till divisor<=n
///if n%div === 0 then increase count
const M=12;
function divisorsCount(M)
{
    let divCounter=0;
    for(let div=1;div<=M;div++)
    {
        if(M%div === 0)
        {
            divCounter++;
        }
    }
    return divCounter;
}
console.log(divisorsCount(M));

//Given a string s, return true if it contains all unique characters (no character repeats). Otherwise return false.
const s = 'Apple'
function uniqueCharValidation(s)
{
    const newStr = s.toLowerCase();
    let freq = {};
    for(let char of newStr)
    {
        freq[char] = (freq[char]||0)+1;
    }
    let isUnique = true;
    for(let char in freq)
    {
        if(freq[char]>1)
        {
            isUnique = false;
            break;
        }
    }
    return isUnique;
}
console.log(uniqueCharValidation(s));

//Given a string s, return the character with the highest alphabetical order (case-insensitive).
const inpStr = 'Apple'
function highestAlphabeticalOrder(inpStr)
{
    const lowerStr = inpStr.toLowerCase();
    let outHighest = lowerStr[0];
    for(let i=1;i<lowerStr.length;i++)
    {
        if(outHighest<lowerStr[i])
        {
            outHighest = lowerStr[i];
        }
    }
    return outHighest;
}
console.log(highestAlphabeticalOrder(inpStr));

//Given an integer array nums, return a new array containing only the numbers that appear exactly once in nums.
const numInp = [1,2,2,3,4,4,5];
function onlyUniqueNumb(numInp)
{
    let outputArr = [];
    for(let i=0;i<numInp.length;i++)
    {
        let isUnique = true;
        for(let j=0;j<numInp.length;j++)
        {
            if(i!==j && numInp[i] === numInp[j])
            {
                isUnique = false;
                break;
            }
        }
        if(isUnique) outputArr.push(numInp[i]);
    }
    return outputArr;
}
console.log(onlyUniqueNumb(numInp));

//Given an integer n, return the product of all digits of n.
const n=1123;
function productOfDigits(n)
{
    let product = 1;
    if(n === 0) return 0;
    while(n>0)
    {
        let digit = n%10;
        product = product*digit;
        n=Math.floor(n/10);
    }
    return product;
}
console.log(productOfDigits(n));

//Given a string s, return the character that appears the most number of times.
const str = "Mississippi"
function mostFrequentChar(str)
{
    let charFreq = {};
    for(let char of str)
    {
        charFreq[char] = (charFreq[char]||0)+1;
    }
    let mostFrequentChar = str[0];
    let maxFreq = 0;
    for(let char in charFreq)
    {
        if(charFreq[char]>maxFreq)
        {
            maxFreq = charFreq[char];
            mostFrequentChar = char;
        }
    }
    return mostFrequentChar;
}
console.log(mostFrequentChar(str));