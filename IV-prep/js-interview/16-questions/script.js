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
