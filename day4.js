//Given a string, find the first character that does NOT repeat.
//If all characters repeat, return -1.
//a variable output(blank string)
//loop through the string and check if the current character is present anywhere else
// if not, return the current character and break the loop
const strInp = 'aabbccdde'
function firstUniqueCharacter(strInp)
{
    let output = '';
    for(let i=0;i<strInp.length;i++)
    {
        let isUnique = true;
        for(let j=0;j<strInp.length;j++)
        {
            if(i!==j && strInp[j] === strInp[i])
            {
                isUnique = false;
                break;
            }
        }
        if(isUnique === true)
        {
            output = strInp[i]
            return output;
        }
    }
    return -1;
}
console.log(firstUniqueCharacter(strInp));