//Excercise 1
let expenses = [250,248,587,6994,51,4596]
let totalExpenses = expenses.reduce((sum,total)=>sum+total,0);
console.log(totalExpenses);
let sortedList = expenses.sort((a,b)=>a-b);
var highest = sortedList[expenses.length-1]
var lowest = sortedList[0]
console.log(highest+" is the highest expense value");
console.log(lowest+" is the lowest expense value");

//Excercise 2
console.log("=============================");
let studentNames = ["Ram","Rahim","Insaan","CarryMinati","Bhuvan","Tanmay","Harsh","Ashis"]
studentNames.unshift("Amit");
studentNames.pop();
let sortedStudents = studentNames.sort();
console.log(sortedStudents);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//Excercise 3
let productPrices = [12,25,58,56,54,965,987,125,78,36]
let discountedPrices = productPrices.map(price=>price-(price*0.1));
console.log(discountedPrices);
let affordableProducts = discountedPrices.filter(discount=>discount<50);
console.log(affordableProducts);
let totalAffordable = affordableProducts.reduce((total,each)=>total+each,0);
console.log(totalAffordable);

console.log("+++++Excercise 4 - Display current date and time+++++++++")
//Excercise 4 - Display current date and time
var today = new Date();
var day = today.getDay();
//Array of day names
var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//display the current day
console.log("Today is: "+daylist[day]+".")
//get current hour minutes and seconds
var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
//Display current time
console.log("Current Time: "+hour+":"+minutes+":"+seconds);

console.log("+++++Excercise 5 - print windown content+++++++++")
function print_current_window()
{
    window.print();
}

console.log("+++++Excercise 6 - calculate area of triangle+++++++++")
//3 sides of triangle
var side1 = 5;
var side2 = 6;
var side3 = 7;
//Using heron's formula. Calculate the semiperimeter. 
var s = 1/2 * (side1+side2+side3);
var area = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
console.log(area);

console.log("+++++Excercise 7 - calculate area of triangle+++++++++")



