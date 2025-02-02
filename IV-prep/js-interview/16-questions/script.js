//? Question 1: Count Character Frequencies

// Problem:
//? Given a string, write a function that counts the frequency of each character in the string and returns an object where the keys are the characters and the values are their respective counts.

// Example:
// const input = "hello world";
// const output = countCharacterFrequencies(input);
// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

// function countCharacterFrequencies(str) {
//   const frequencyMap = {};

//   for (const char of str) {
//     if (frequencyMap[char]) {
//       frequencyMap[char]++;
//     } else {
//       frequencyMap[char] = 1;
//     }
//   }

//   return frequencyMap;
// }

// const input = "hello world";
// const output = countCharacterFrequencies(input);

// console.log(output);

/////////////////////////////////////////////////////////////////////////////////////////

//? Question 2: Group Anagrams

// Problem:
//? Given an array of strings, group the anagrams together. An anagram is a word formed by rearranging the letters of another.

// const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const output = groupAnagrams(input);
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

// Explanation:

// - Use a hashmap where the key is a sorted version of the string (which will be the same for anagrams).
// - The value will be an array of strings that are anagrams of each other.
// - Iterate through the input array, sort each string, and push it into the corresponding array in the hashmap.

// function groupAnagrams(input) {
//   const hashmap = {};

//   for (const word of input) {
//     const sortedWord = word.split("").sort().join("");
//     console.log(sortedWord);

//     if (!hashmap[sortedWord]) {
//       hashmap[sortedWord] = [];
//     }
//     hashmap[sortedWord].push(word);
//   }

//   return Object.values(hashmap);
// }

// const input = ["eat", "tea", "tan", "ate", "nat", "bat", "make"];
// const output = groupAnagrams(input);
// console.log(output); // [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

/////////////////////////////////////////////////////////////////////////////////////////

//? Question 3: Two Sum

// Problem:
//? Given an array of integers and a target sum, return the indices of the two numbers that add up to the target.

// const input = [2, 7, 11, 15];
// const target = 9;
// const output = twoSum(input, target);
// Output: [0, 1] (because input[0] + input[1] = 2 + 7 = 9)

// Explanation:

// - Use a hashmap to store the numbers and their indices as you iterate through the array.
// - For each number, calculate the complement (target - current number).
// - Check if the complement exists in the hashmap. If it does, return the indices; otherwise, add the current number and its index to the hashmap.

// function twoSum(input, target) {
//   const hashmap = {};

//   for (let i = 0; i < input.length; i++) {
//     const complement = target - input[i];

//     if (hashmap[complement] !== undefined) {
//       return [hashmap[complement], i];
//     }

//     hashmap[input[i]] = i;
//   }

//   return [];
// }

// const input = [2, 7, 11, 15];
// const target = 9;
// const output = twoSum(input, target);
// console.log(output); // Output: [0, 1]

/////////////////////////////////////////////////////////////////////////////////////////

//? Question 4: First Unique Character in a String

// Problem:
//? Given a string, find the first non-repeating character and return its index. If it doesn't exist, return -1.

// Example:
//const input = "leetcode";
//const output = firstUniqueCharacter(input);
// Output: 0 (the first unique character is 'l')

// Explanation:

// - Use a hashmap to count the occurrences of each character.
// - Iterate through the string a second time to find the first character with a count of 1 in the hashmap.
// - Return the index of that character.

// function firstUniqueCharacter(input) {
//   const hashmap = {};

//   for (const char of input) {
//     hashmap[char] = (hashmap[char] || 0) + 1;
//   }

//   for (let i = 0; i < input.length; i++) {
//     if (hashmap[input[i]] === 1) {
//       return i;
//     }
//   }

//   return -1;
// }

// const input = "ceetcode";
// const output = firstUniqueCharacter(input);
// console.log(output); // Output: 0

/////////////////////////////////////////////////////////////////////////////////////////

//? Question 5: Find All Duplicate Elements

//Problem:
//? Given an array of integers, return an array of all the elements that appear more than once.

// Example:
// const input = [1, 2, 3, 4, 3, 2, 1];
// const output = findDuplicates(input);
// Output: [1, 2, 3]

// Explanation:
// - Use a hashmap to count the occurrences of each number.
// - After counting, iterate through the hashmap and collect keys that have a count greater than 1.
// - Return the array of duplicates.

// function findDuplicates(input) {
//   const hashmap = {}; // Initialize an empty hashmap to store counts
//   const duplicates = []; // This will hold the duplicate numbers

//   for (const num of input) {
//     hashmap[num] = (hashmap[num] || 0) + 1;
//   }

//   for (const num in hashmap) {
//     if (hashmap[num] > 1) {
//       duplicates.push(Number(num));
//     }
//   }

//   return duplicates;
// }

// const input = [1, 2, 3, 4, 5, 6, 4, 3, 2, 1];
// const output = findDuplicates(input);
// console.log(output); // Output: [1, 2, 3]

/////////////////////////////////////////////////////////////////////////////////////////

// Problem:
//? Given a string, write a function that counts the frequency of each character in the string and returns an object where the keys are the characters and the values are their respective counts.

// function countCharacterFrequencies(str) {
//   //loop over each char in string
//   for (let i = 0; i < str.length; i++) {
//     //check if char already exist in string
//     if (str.indexOf(str[i]) === i) {
//       let count = 0;

//       //loop thriough str again to check occurence
//       for (let j = 0; j < str.length; j++) {
//         //if it exists then increase the count
//         if (str[i] === str[j]) {
//           count++;
//         }
//       }
//       console.log(str[i] + ":" + count);
//     }
//   }
// }

// const input = "hello world";
// countCharacterFrequencies(input);

/////////////////////////////////////////////////////////////////////////////////////////

//? Problem: Given an array of numbers, calculate the sum of all the numbers.

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// function sumFn(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }

//   return sum;
// }

// const output = sumFn(arr);
// console.log(output);

/////////////////////////////////////////////////////////////////////////////////////////

//? Problem: Given an array of numbers, find and return the largest number.

// let arr = [1, 2, 13, 4, 5, 18];
// let largest = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
// }

// console.log(largest);

/////////////////////////////////////////////////////////////////////////////////////////

//? Problem: Write a function that checks if a given number is prime (a number greater than 1 that has no divisors other than 1 and itself).

// function isPrime(num) {
//   if (num < 2) return false; // Step 1: Check if number is less than 2
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     // Step 2: Loop through possible divisors
//     if (num % i === 0) {
//       return false; // Step 3: If divisible, return false
//     }
//   }
//   return true; // Step 4: If no divisor, return true
// }

// console.log(isPrime(7)); // Output: true
// console.log(isPrime(10)); // Output: false

/////////////////////////////////////////////////////////////////////////////////////////

//? Problem: Given a string, reverse it.

// let str = "hello";
// let reverseString = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversedStr = reversedStr + str[i];
// }

// console.log(reversedStr);

// function reverseStr(str) {
//   reverseString = str.split("").reverse().join("");

//   return reverseString;
// }

// console.log(reverseStr(str));

/////////////////////////////////////////////////////////////////////////////////////////

//? Write a function that takes a string and returns the number of vowels (a, e, i, o, u) in the string.

// function countVowels(str) {
//   let vowels = "aeiou";
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }

//   return count;
// }

// const output = countVowels("my name is ashwini");

// console.log(output);

/////////////////////////////////////////////////////////////////////////////////////////
