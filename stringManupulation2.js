//Consecutive characters to string format
//output => a3b2c2d2e3f2
const consecutive = 'aaabbccddeeeff';
let currChar = consecutive[0];
let count1 = 1;
let finalString = '';

for(let i=1;i<consecutive.length;i++)
{
    if(currChar === consecutive[i])
    {
        count1++;
    }
    else{
        finalString += currChar+count1;
        currChar = consecutive[i];
        count1 = 1;
    }
}
finalString +=currChar + count1;
console.log(finalString);

//Count Consecutive Digits + Characters
const consecutive2 = 'A111BB00CCCCC';
let currChar2 = consecutive2[0];
let count2 = 1;
let finalArrObj2 = [];

for(let i=1;i<consecutive2.length;i++)
{
    if(currChar2 === consecutive2[i])
    {
        count2++
    }
    else{
        finalArrObj2.push({char: currChar2, count: count2});
        currChar2 = consecutive2[i];
        count2 = 1;
    }
}
finalArrObj2.push({char: currChar2, count: count2});
console.log(finalArrObj2);

//Consecutive Character Expansion to Original String
const arrObj3 = [
  { char: 'A', count: 1 },
  { char: '1', count: 3 },
  { char: 'B', count: 2 },
  { char: '0', count: 2 },
  { char: 'C', count: 5 }
];
let finalString3 = '';
arrObj3.forEach((obj3=> 
{
    finalString3 += obj3.char.repeat(obj3.count);
}))
console.log(finalString3);

//Find Longest Consecutive Character in String
const str4 = 'aaabbbbccccddee';
let currChar4 = str4[0];
let count4 = 1;
let maxCount4 = 0;
let finalObj4 = {char:currChar4,count:1};

for(let i=1;i<str4.length;i++)
{
    if(currChar4 === str4[i])
    {
        count4++;
    }
    else{
        if(count4>=maxCount4)
    {
        maxCount4 = count4;
        finalObj4 = {char:currChar4,count:maxCount4};
    }
    currChar4 = str4[i];
    count4 = 1; 
}}
if(count4>=maxCount4)
{
    finalObj4 = {char:currChar4,count:count4};
}
console.log(finalObj4);


//Find Longest Consecutive Character in String
const str5 = 'mmmnnnnnoooopp';
let currChar5 = str5[0];
let count5 = 1;
let maxCount5 = 0;
let finalResult = {char: currChar5, count: count5}

for(let i=1;i<str5.length;i++)
{
    if(currChar5 === str5[i])
    {
        count5++;
    }
    else{
        if(count5>=maxCount5)
        {
            maxCount5 = count5;
            finalResult = {char:currChar5,count:maxCount5};
        } 
        count5 = 1;
        currChar5 = str5[i];
    }
}
if(count5>=maxCount5){
    finalResult = {char:currChar5,count:count5};
}
console.log("Final result ",finalResult);

//Remove Consecutive Duplicates
// Input: "aaabbccccd"
// Output: "abcd"
const str6 = 'aaabbccccd';
let currChar6 = str6[0];
let str61 = '';

for(let i=1;i<str6.length;i++)
{
    if(currChar6 !== str6[i])
    {
        str61 += currChar6;
    }
    currChar6 = str6[i];

}
str61 += currChar6;
console.log(str61);

//Find Most Frequent Character in a String
const str7 = "aaabbccccccddeee";
let currChar7 = str7[0];
let count7 = 1;
let maxCount7 = 0;
let finalResult7 = {char:currChar7, count: count7};

for(let i=1;i<str7.length;i++)
{
    if(currChar7 === str7[i])
    {
        count7++;
    }
    else{
        if(count7>=maxCount7)
        {
            maxCount7 = count7;
            finalResult7 = {char: currChar7, count: maxCount7}
        }
        currChar7 = str7[i];
        count7 = 1;
    }
}
if(count7>=maxCount7)
{
    finalResult7 = {char:currChar7,count:count7};
}
console.log("Most frequent character is ",finalResult7);

//Remove Characters Occurring More Than Once
const str8 = 'abacbcd';
let currChar8 = str8[0];
let freq = {};
let finalResult8 = '';

for(char of str8)
{
    if(freq[char])
    {
        freq[char] = freq[char]+1
    }
    else{
        freq[char] = 1;
    }
}
console.log(freq);

for(let i=0;i<str8.length;i++)
{
    if(freq[str8[i]] === 1)
    {
        finalResult8 += str8[i];
    }
}
console.log(finalResult8);

//sliced by 1st 2 characters
const str9 = 'qwerty';
const d = 2;
const right = str9.slice(d);
const left = str9.slice(0,d);
console.log(right+left);

//Reverse Every Word Inside a Sentence
const str10 = 'I Love JavaScript';
//I evoL tpircSavaJ
let finalStr10 = '';
const splitArr10 = str10.split(' ');
for(let item of splitArr10)
{
    let reversed = item.split('').reverse().join('');
    finalStr10 += reversed+' ';
}
finalStr10 = finalStr10.trim();
console.log(finalStr10);

//Group Consecutive Characters into Arrays
const str11 = 'aaabbccccdd';
let finalArr11 = [];
let currChar11 = str11[0];
let count11 = 1;

for(let i=1;i<str11.length;i++)
{
    if(currChar11 === str11[i])
    {
        count11++;
    }
    else{
        finalArr11.push([currChar11,currChar11.repeat(count11)]);
        currChar11 = str11[i];
        count11 = 1;
    } 
}
finalArr11.push([currChar11,currChar11.repeat(count11)]);
console.log(finalArr11);

//Find All Repeated Blocks (Advanced Consecutive Grouping)
const str12 = 'aaabbccccddeeefffgh';
let currChar12 = str12[0];
let count12 = 1;
let finalArr12 = [];

for(let i=1;i<str12.length;i++)
{
    if(currChar12 === str12[i])
    {
        count12++;
    }
    else{
        finalArr12.push({char:currChar12,block:currChar12.repeat(count12)});
        currChar12 = str12[i];
        count12 = 1;
    }
}
finalArr12.push({char:currChar12,block:currChar12.repeat(count12)});
console.log(finalArr12);

//Remove Characters That Are Not Part of a Pair
const str13 = 'abbcccdddde';
let finalStr13 = '';
let count13 = 1;
let currChar13 = str13[0];

for(let i=1;i<str13.length;i++)
{
    if(currChar13 === str13[i])
    {
        count13++;
    }
    else{
        if(count13 > 1)
        {
            finalStr13 += currChar13.repeat(count13);
        }
        currChar13 = str13[i];
        count13 = 1;
    }
} 
if(count13 > 1){
finalStr13 += currChar13.repeat(count13);}
console.log(finalStr13);
