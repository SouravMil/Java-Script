//Problem: Count Subarrays of Size K With Sum Greater Than Target
const numArr = [2, 5, 1, 8, 2, 9, 1];
const k = 3;
const target = 10;
function countOfSubarrays(numArr,k,target)
{
    let left = 0;
    let sum = 0;
    let counter = 0;
    for(let right=0;right<numArr.length;right++)
    {
        sum += numArr[right];
        if(right-left+1 === k)
        {
            if(sum>target)
            {
                counter++;
            }
            sum -= numArr[left];
            left++;
        }
    }
    return counter;
}
console.log(countOfSubarrays(numArr,k,target));

//Problem: Maximum Consecutive Valid Windows
const numArr1 = [2, 5, 1, 8, 2, 9, 1];
const k1 = 3;
const target1 = 10;
function maxConsecutiveValidSubArr(numArr1,k1,target1)
{
    let left = 0;
    let sum = 0;
    let counter = 0;
    let maxCount = 0;
    for(let right=0;right<numArr1.length;right++)
    {
        sum += numArr1[right];
        if(right-left+1 === k1)
        {
            if(sum>target1)
            {
                counter++;
                maxCount = Math.max(counter,maxCount)
            }
            else
            {
                counter = 0;
            }
            sum -= numArr1[left];
            left++;
        }
    }
    return maxCount;
}
console.log(maxConsecutiveValidSubArr(numArr1,k1,target1));

//134: Problem: Max Sum of Consecutive Valid Windows
const numArr2 = [1, 3, 2, 6, 1, 4, 1, 8, 2];
const k2 = 3;
const target2 = 5;
function maxSumofValidSubArr(numArr2,k2,target2)
{
    let left = 0;
    let sum = 0;
    let maxSum = 0;
    for(let right=0;right<numArr2.length;right++)
    {
        sum += numArr2[right];
        if(right-left+1 === k2)
        {
            if(sum>target2)
            {
                maxSum = Math.max(maxSum,sum);
            }
            sum -= numArr2[left];
            left++;
        }
    }
    return maxSum;
}
console.log(maxSumofValidSubArr(numArr2,k2,target2));