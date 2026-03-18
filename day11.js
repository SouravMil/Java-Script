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
const numArr5 = [2, 3, 1, 2, 4, 3];
const target5 = 7;
function smallestSubArr(numArr5, target5) {
  let left = 0;
  let sum = 0;
  let smallest = Infinity;
  for (let right = 0; right < numArr5.length; right++) {
    sum += numArr5[right];
    while (sum >= target5) {
      smallest = Math.min(smallest, right - left + 1);
      sum -= numArr5[left];
      left++;
    }
  }
  return smallest === Infinity ? 0 : smallest;
}
console.log(smallestSubArr(numArr5, target5));

//138: Given a string, find the length of the
// longest substring that contains at most K distinct characters.
const s = "eceba";
const p = 2;
function longestSubstring(s, p) {
  let left = 0;
  let freq = {};
  let longest = -Infinity;
  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    freq[char] = (freq[char] || 0) + 1;
    while (Object.keys(freq).length > p) {
      let leftChar = s[left];
      freq[leftChar]--;
      if (freq[leftChar] === 0) {
        delete freq[leftChar];
      }
      left++;
    }
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}
console.log(longestSubstring(s, p));

//Given a string s, find the length of the longest substring with no repeating characters.
const s1 = "abcabcbb";
function longestSubstringNorepeat(s1) {
  let left = 0;
  let freq = {};
  let longest = -Infinity;
  for (let right = 0; right < s1.length; right++) {
    let char = s1[right];
    freq[char] = (freq[char] || 0) + 1;
    while (freq[char] > 1) {
      let leftChar = s1[left];
      freq[leftChar]--;
      left++;
    }
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}
console.log(longestSubstringNorepeat(s1));

//140: Given a string s, find the length of the longest substring that contains at most 2 distinct characters.
const s2 = "ccaabbb";
const k3 = 2;
function logestSubstring2distinct(s2, k3) {
  let left = 0;
  let longest = 0;
  let freq = {};
  for (let right = 0; right < s2.length; right++) {
    let char = s2[right];
    freq[char] = (freq[char] || 0) + 1;
    while (Object.keys(freq).length > k3) {
      let leftChar = s2[left];
      freq[leftChar]--;
      if (freq[leftChar] === 0) {
        delete freq[leftChar];
      }
      left++;
    }
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}
console.log(logestSubstring2distinct(s2, k3));

//Given a string s and an integer k, return the length of the
//longest substring that contains exactly k distinct characters.
//If no such substring exists, return 0.
const s4 = "aabacbebebe";
const k4 = 3;
function longestSubstringwithKdistinct(s4, k4) {
  let left = 0;
  let freq = {};
  let longest = 0;
  for (let right = 0; right < s4.length; right++) {
    let char = s4[right];
    freq[char] = (freq[char] || 0) + 1;
    while (Object.keys(freq).length > k4) {
      let leftChar = s4[left];
      freq[leftChar]--;
      if (freq[leftChar] === 0) {
        delete freq[leftChar];
      }
      left++;
    }
    if (Object.keys(freq).length === k4) {
      longest = Math.max(longest, right - left + 1);
    }
  }
  return longest;
}
console.log(longestSubstringwithKdistinct(s4, k4));

//142: Given a string s and integer k, count how many substrings contain at most k distinct characters.
//Return the total number of such substrings.
const str = "abc";
const P = 2;
function countOfSubstring(str, P) {
  let left = 0;
  let freq = {};
  let counter = 0;
  for (let right = 0; right < str.length; right++) {
    let char = str[right];
    freq[char] = (freq[char] || 0) + 1;
    while (Object.keys(freq).length > P) {
      let leftChar = str[left];
      freq[leftChar]--;
      if (freq[leftChar] === 0) {
        delete freq[leftChar];
      }
      left++;
    }
    counter += right - left + 1;
  }
  return counter;
}
console.log(countOfSubstring(str, P));

//143: Given two strings: Find all starting indices of substrings in s that are anagrams of p.
//Return the indices.
const S = "cbaebabacd";
const pattern = "abc";
function isEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

function findIndexofAnagrams(S, pattern) {
  let left = 0;
  let result = [];
  let freqPattern = {};
  let window = {};
  for (let char of pattern) {
    freqPattern[char] = (freqPattern[char] || 0) + 1;
  }
  for (let right = 0; right < S.length; right++) {
    let rightChar = S[right];
    window[rightChar] = (window[rightChar] || 0) + 1;
    if (right - left + 1 === pattern.length) {
      if (isEqual(window, freqPattern)) {
        result.push(left);
      }
      let leftChar = S[left];
      window[leftChar]--;
      if (window[leftChar] === 0) {
        delete window[leftChar];
      }
      left++;
    }
  }
  return result;
}
console.log(findIndexofAnagrams(S, pattern));

//144: Return all anagram indices.
const S1 = "abab";
const pattern1 = "ab";

function isEqlObj(obj1, obj2) {
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  if (key1.length !== key2.length) return false;
  for (let key of key1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

function anagramIndices(S1, pattern1) {
  let left = 0;
  let freqPatt = {};
  let window = {};
  let result = [];
  for (let char of pattern1) {
    freqPatt[char] = (freqPatt[char] || 0) + 1;
  }
  for (let right = 0; right < S1.length; right++) {
    let rightChar = S1[right];
    window[rightChar] = (window[rightChar] || 0) + 1;
    if (right - left + 1 === pattern1.length) {
      if (isEqlObj(freqPatt, window)) {
        result.push(left);
      }
      let leftChar = S1[left];
      window[leftChar]--;
      if (window[leftChar] === 0) {
        delete window[leftChar];
      }
      left++;
    }
  }
  return result;
}
console.log(anagramIndices(S1, pattern1));

//145: Modify your function so it returns the actual substrings instead of indices.
const strng = "abab";
const design = "ab";

function objEql(obj1, obj2) {
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  if (key1.length !== key2.length) return false;
  for (let key of key1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

function anagramSubstring(strng, design) {
  let left = 0;
  let result = [];
  let freqPatt = {};
  let window = {};
  for (let char of design) {
    freqPatt[char] = (freqPatt[char] || 0) + 1;
  }
  for (let right = 0; right < strng.length; right++) {
    let rightChar = strng[right];
    window[rightChar] = (window[rightChar] || 0) + 1;
    if (right - left + 1 === design.length) {
      if (objEql(window, freqPatt)) {
        result.push(strng.substring(left, right + 1));
      }
      let leftChar = strng[left];
      window[leftChar]--;
      if (window[leftChar] === 0) {
        delete window[leftChar];
      }
      left++;
    }
  }
  return result;
}
console.log(anagramSubstring(strng, design));

//146: Given a string, find the length of the longest substring with at most K distinct characters.
const a = "eceba";
const L = 2;
function longestSubstring(a, L) {
  let left = 0;
  let map = {};
  let longest = 0;
  for (let right = 0; right < a.length; right++) {
    let rightChar = a[right];
    map[rightChar] = (map[rightChar] || 0) + 1;
    while (Object.keys(map).length > L) {
      let leftChar = a[left];
      map[leftChar]--;
      if (map[leftChar] === 0) {
        delete map[leftChar];
      }
      left++;
    }
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}
console.log(`The longest sub-string is: ${longestSubstring(a, L)}`);

//147: Find the longest substring with at most K distinct characters
// BUT return the substring (not length).
const B = "eceba";
const A = 2;
function returnSubstring(B, A) {
  let left = 0;
  let map = {};
  let longest = 0;
  let result = "";
  for (let right = 0; right < B.length; right++) {
    let rightChar = B[right];
    map[rightChar] = (map[rightChar] || 0) + 1;
    while (Object.keys(map).length > A) {
      let leftChar = B[left];
      map[leftChar]--;
      if (map[leftChar] === 0) {
        delete map[leftChar];
      }
      left++;
    }
    if (right - left + 1 > longest) {
      longest = right - left + 1;
      result = B.substring(left, right + 1);
    }
  }
  return result;
}
console.log(`Printing the longest sub-string: ${returnSubstring(B, A)}`);
