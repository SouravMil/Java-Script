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
    
}
console.log(highestAlphabeticalOrder(inpStr));