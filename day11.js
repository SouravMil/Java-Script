//Problem: Count Subarrays of Size K With Sum Greater Than Target
const numArr = [2, 5, 1, 8, 2, 9, 1];
const k = 3;
const target = 10;
function countOfSubarrays(numArr, k, target) {
  let left = 0;
  let sum = 0;
  let counter = 0;
  for (let right = 0; right < numArr.length; right++) {
    sum += numArr[right];
    if (right - left + 1 === k) {
      if (sum > target) {
        counter++;
      }
      sum -= numArr[left];
      left++;
    }
  }
  return counter;
}
console.log(countOfSubarrays(numArr, k, target));

//Problem: Maximum Consecutive Valid Windows
const numArr1 = [2, 5, 1, 8, 2, 9, 1];
const k1 = 3;
const target1 = 10;
function maxConsecutiveValidSubArr(numArr1, k1, target1) {
  let left = 0;
  let sum = 0;
  let counter = 0;
  let maxCount = 0;
  for (let right = 0; right < numArr1.length; right++) {
    sum += numArr1[right];
    if (right - left + 1 === k1) {
      if (sum > target1) {
        counter++;
        maxCount = Math.max(counter, maxCount);
      } else {
        counter = 0;
      }
      sum -= numArr1[left];
      left++;
    }
  }
  return maxCount;
}
console.log(maxConsecutiveValidSubArr(numArr1, k1, target1));

//134: Problem: Max Sum of Consecutive Valid Windows
const numArr2 = [1, 3, 2, 6, 1, 4, 1, 8, 2];
const k2 = 3;
const target2 = 5;
function maxSumofValidSubArr(numArr2, k2, target2) {
  let left = 0;
  let sum = 0;
  let maxSum = 0;
  for (let right = 0; right < numArr2.length; right++) {
    sum += numArr2[right];
    if (right - left + 1 === k2) {
      if (sum > target2) {
        maxSum = Math.max(maxSum, sum);
      }
      sum -= numArr2[left];
      left++;
    }
  }
  return maxSum;
}
console.log(maxSumofValidSubArr(numArr2, k2, target2));

//135: Longest Subarray with Sum ≤ Target
const numArr3 = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
const target3 = 8;
function longestSubarr(numArr3, target3) {
  let left = 0;
  let sum = 0;
  let longest = 0;
  for (let right = 0; right < numArr3.length; right++) {
    sum += numArr3[right];
    while (sum > target3) {
      sum -= numArr3[left];
      left++;
    }
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}
console.log(longestSubarr(numArr3, target3));

//136: Longest Subarray with At Most K Zeros
const numArr4 = [1, 1, 0, 0, 1, 1, 1, 0, 1];
const K = 2;
function longestSubArrwithAtmostzeros(numArr4, K) {
  let left = 0;
  let counter = 0;
  let longest = 0;
  for (let right = 0; right < numArr4.length; right++) {
    if (numArr4[right] === 0) {
      counter++;
      while (counter > K) {
        if (numArr4[left] === 0) {
          counter--;
        }
        left++;
      }
    }
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}
console.log(longestSubArrwithAtmostzeros(numArr4, K));

//137: Given an array of positive integers,
// find the minimum length of a subarray whose sum is ≥ target.
// If no such subarray exists, return 0.
const numArr5 = [2,3,1,2,4,3];
const target5 = 7;
function smallestSubArr(numArr5,target5)
{
    let left = 0;
    let sum = 0;
    let smallest = Infinity;
    for(let right=0;right<numArr5.length;right++)
    {
        sum += numArr5[right];
        while(sum >= target5)
        {
            smallest = Math.min(smallest,right-left+1);
            sum -= numArr5[left];
            left++;
        }
    }
    return smallest === Infinity ? 0 : smallest;
}
console.log(smallestSubArr(numArr5,target5));

//138: Given a string, find the length of the 
// longest substring that contains at most K distinct characters.
const s = "eceba";
const p = 2;
function longestSubstring(s,p)
{
    
}