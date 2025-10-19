let day = 'tuesday '
console.log(day.length);
let subDay = day.slice(0,4);
console.log(subDay);
console.log(day[1]);
let splitDay = day.split("s")
console.log(splitDay[1].length);
console.log(splitDay[1].trim().length);

let date ='23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)
diff.toString();

let newQuote = day+" is Funday"
console.log(newQuote)
let val=newQuote.indexOf("day",5)
console.log(val)

let val1=newQuote.indexOf("day")
let i=0;
while(val1!==-1)
{
    i++
    val1=newQuote.indexOf("day",val1+1)
}
console.log(i);