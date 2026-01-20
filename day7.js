//Given a positive integer n, return the product of all prime digits present in n.
//If there are no prime digits, return 1.
///Logic: get digit one by one using %10. 
///validate the number if prime
///store it in a variable by *=
const n = 24568756321;
function primeDigitsProduct(n)
{
    let primeProduct = 1;
    while(n>0)
    {
        let digit = n%10;
        if(digit>1)
        {
            let isPrime = true;
            for(let div=2;div<digit;div++)
            {
                if(digit%div === 0)
                {
                    isPrime = false;
                    break;
                }
            }
            if(isPrime) primeProduct *= digit;
        }
        n=Math.floor(n/10);
    }
    return primeProduct;
}
console.log(primeDigitsProduct(n));

//Given an array of integers arr, return a new array containing only the prime numbers from arr in the same order.
///Logic: Loop through the array
///validate if the current number is prime. push it to the output array
const arr = [4, 7, 10, 11, 15, 2];
function primeNumberArray(arr)
{
    let primeArray = [];
    for(let num of arr)
    {
        let isPrime = true;
        if(num>1)
        {
            for(let div=2;div*div<=num;div++)
            {
                if(num%div === 0)
                {
                    isPrime = false;
                    break;
                }
            }
            if(isPrime) primeArray.push(num);
        }
    }
    return primeArray;
}
console.log(primeNumberArray(arr));

//Given a string s, return a new string where every vowel in s is replaced by *, 
// while consonants and other characters remain unchanged.
//Treat uppercase and lowercase vowels the same.
///Logic: convert to lowerCase => split into characters. 
///if character is vowel then replace it with *
///join all the character at the end
const string = 'Hello World'
function vowelReplacement(string)
{
    let finalStr = '';
    const vowels = 'aeiouAEIOU';
    for(let char of string)
    {
        if(vowels.includes(char))
        {
            finalStr += '*';
        }
        else{
            finalStr += char;
        }
    }
    return finalStr;
}
console.log(vowelReplacement(string));