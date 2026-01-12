//Given a number n, return how many prime numbers exist from 1 to n.
function totalNumberofPrimes()
{
    const n = 20;
    let currNumber = 2;
    let outputCounter = 0;
    while(currNumber<n)
    {
        let isPrime = true;
        for(let div=2;div<currNumber;div++)
        {
            if(currNumber%div === 0)
            {
                isPrime = false;
                break;
            }
        }
        if(isPrime)
        {
            outputCounter++;
        }
        currNumber++;
    }
    return outputCounter;
}
console.log(totalNumberofPrimes());

//Given a string, count how many vowels are in it.
const inpStr = 'hello world';
function countVowels(inpStr)
{
    let charArr = inpStr.toLowerCase().split('');
    const vowels = 'aeiou';
    let vowelCount = 0;
    for(char of charArr)
    {
        if(vowels.includes(char))
        {
            vowelCount++;
        }
    }
    return vowelCount;
}
console.log(countVowels(inpStr));

//Given a positive integer n, return the sum of all even digits in the number.
///Logic: get digit by the process n%10. 
///Divide the digit by 2 => if reminder is 0 then store in variable sum. 
///for next number if the reminder is 0 then add and store in variable sum.
function sumAllEvenDigits()
{
    let n = 53824;
    let sum = 0;
    while(n>0)
    {
        let digit = 0;
        digit = n%10;
        n = Math.floor(n/10);
        if(digit%2 === 0)
        {
            sum += digit;
        }
    }
    return sum;
}
console.log(sumAllEvenDigits());

//Given a string, return the character that appears most frequently.
//If multiple characters have the same highest frequency, return any one of them.
///logic: loop through the string and count the frequency of each characters
///again loop through the frequency and check which character has highest number. Return that.
const inpString = 'javascript';
function returnMostFrequentCharacter(inpString)
{
    let charArr = inpString.toLowerCase();
    let freq = {};
    for(char of charArr)
    {
        freq[char] = (freq[char] || 0 )+1
    }
    let mostFrequent = '';
    let maxCount = 0;
    for(ch in freq)
    {
        if(freq[ch] > maxCount)
        {
            maxCount = freq[ch];
            mostFrequent = ch;
        }
    }
    return ([mostFrequent,maxCount]);
}
console.log(returnMostFrequentCharacter(inpString));

//Given an array of numbers, return a new array containing only the numbers that are perfect squares.
///logic: loop through the array, 
///if square root of number is integer then push into output array
const inpNum = [1, 2, 3, 4, 9, 10, 16, 20]
function arrofSquares(inpNum)
{
    let outputArr = [];
    for(let num of inpNum)
    {
        let sqroot = Math.sqrt(num);
        if(Number.isInteger(sqroot))
        {
            outputArr.push(num);
        }
    }
    return outputArr;
}
console.log(arrofSquares(inpNum));

//Given a string, return a new string with all duplicate characters removed.
const wordStr = "banana"
function allUniqueCharacter(wordStr)
{
    let seen = {};
    let outPut = '';
    for(let char of wordStr)
    {
        if(!seen[char])
        {
            outPut += char;
            seen[char] = true;
        }
    }
    return outPut;
}
console.log(allUniqueCharacter(wordStr));

//Given a number n, check if the number is a perfect number. 
//A number is perfect if the sum of all its proper divisors equals the number itself.
function validatePerfectNumber()
{
    const n = 13;
    let sum = 0;
    for(let i=1;i<n-1;i++)
    {
        if(n%i === 0)
        {
            sum += i;
        }
    }
   return sum === n;
}
console.log(validatePerfectNumber());