// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

// Return the answer with the smaller index first.

// Input:  nums = [3,4,5,6], target = 7

// Output: [0,1]

let twoSum = (nums, target) => {
    let result = {};
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (result[diff] !== undefined) {
            return [result[diff], i];
        }
        result[nums[i]] = i;
    }
};

console.log(twoSum([3,5,4,6], 7)); //[0,1]
console.log(twoSum([2,7,11,15], 9)); //[0,1]