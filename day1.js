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