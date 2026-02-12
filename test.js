const inp = [1,2,3,4]
//op = [1,3,6,10]
function desiredOutput(inp)
{
    let out = [inp[0]];
     let sum = 1;
    for(let i=1;i<=inp.length-1;i++)
    {
       sum += inp[i];
       out.push(sum);
    } 
    return out;
}
console.log(desiredOutput(inp));