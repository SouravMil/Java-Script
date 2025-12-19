//Find the Most Frequent Character
const str1 = 'aaabbccccddeee';
let currChar1 = str1[0];
let count1 = 1;
let strr1 = '';
let maxCount1 = 0;


for(let i=1;i<str1.length;i++)
{
    if(currChar1 === str1[i])
        {
            count1++;
        }   
        else{
            if(count1 > maxCount1)
            {
                maxCount1 = count1;
                strr1 = currChar1+maxCount1;
            }
            currChar1 = str1[i];
            count1 = 1;
        }
}
if(count1 > maxCount1)
{
    strr1 = currChar1;
}
console.log(strr1);

//Convert CamelCase to Snake Case
const str2 = 'JavascriptToSnake'//'thisIsJavaScript';
let str2Out = '';

for(let i=0;i<str2.length;i++)
{
    if(str2[i] === str2[i].toUpperCase())
    {
        if(i !== 0)
        {
            str2Out += '_';
        }
        str2Out += str2[i].toLowerCase();
    }
    else{
            str2Out += str2[i];
        }
}
console.log(str2Out);

//Reverse Each Word, Keep Order
const str3 = 'hello world javascript';
const str3Split = str3.split(' ');
let str3Out = '';

for(let i=0;i<str3Split.length;i++)
{
    let str3Revised = str3Split[i].split('').reverse().join('');
    str3Out += str3Revised+' ';
}
console.log(str3Out);

//Remove Duplicate Characters (Keep First Occurrence Only) //Output: "bans"
const str4 = 'bananas';
let str4Out = '';

for(let i=0;i<str4.length;i++)
{
    if(!str4Out.includes(str4[i]))
    {   
       str4Out += str4[i];
    }
}
console.log(str4Out);

str4Out = [...new Set(str4)].join('');
console.log("This is improved version "+str4Out);
