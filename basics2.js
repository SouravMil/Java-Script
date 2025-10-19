const flag = true;

if(!flag)
{
    console.log("Condition satisfied")
}
else
{
    console.log("condition not satisfied")
}

let i=0;
while(i<10)
{
    i++
    console.log(i)
}

let j=3;
do
{
    j++
}
while(j>10)
    console.log(j);

for(k=10;k>=0;k--)
{
    console.log(k)
}

let required = true
while (required)
{
    console.log(required)
    required=false;
}
console.log("**************************************")
let n=0;
for(m=1;m<=100;m++)
{
    if(m%2 == 0 && m%7 == 0)
    {
        n++
        console.log(m)
        if(n==3)
        {
            break;
        }
    }
}
