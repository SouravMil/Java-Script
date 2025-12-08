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

console.log('4.Sum of numbers');
const inputNumb = [10, 20, 30, 40];
const sumN = inputNumb.reduce((num,cur)=> num+cur,0);
console.log(sumN);

console.log('5.Count occurrences of a letter');
const lett = ["A", "B", "A", "C", "A", "B"];
const lettCount = lett.reduce((coun,current)=> {

    if (coun[current]){
        coun[current] = coun[current]+1;
    } else{
        coun[current] = 1;
    }
    return coun
},{});
console.log(lettCount);

console.log('6.Find the maximum value');
const values = [15, 8, 22, 4, 13];
const max = values.reduce((val,cur)=> {
    if(cur>val)
    {
        return cur;
    }
    return val;
},0);
console.log(max);

console.log("Find the large number");
const value = [12,45,23,1,7,89];
const something = value.reduce((a,b)=> a>b?a:b,0);
console.log(something);
