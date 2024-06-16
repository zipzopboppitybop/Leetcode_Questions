// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Input: s = "racecar", t = "carrace"

// Output: true

let isAnagram = (s,t) => {
  return s.split("").sort().join("") === t.split("").sort().join("")
}

console.log(isAnagram("racecar", "carrace")) //true
console.log(isAnagram("hello", "world")) //false