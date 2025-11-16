console.log("1.Sum of all numbers");
const nums = [10, 20, 30, 40];
const sum = nums.reduce((num1,num2)=> num1+num2,0);
console.log(sum);

console.log("2.Count how many times 'A' appears");
const letters = ["A", "B", "A", "C", "A", "B"];
const countA = letters.reduce((count,current)=> 
{
    if(current === "A")
    {
        return count + 1;
    }
    return count;
},0);
console.log(countA);

console.log("3.Find the maximum number")
const numbers = [5, 12, 3, 50, 9];
const maxNumber = numbers.reduce((max,currNum)=> {
    if(currNum>max)
    {
        return currNum;
    }
    return max;
},numbers[0]);
console.log(maxNumber);
