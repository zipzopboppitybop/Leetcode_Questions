// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]

const topKElementsInList = (nums, k) => {
    let result = {};
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        if (result[nums[i]] !== undefined) {
            result[nums[i]]++;
        } else {
            result[nums[i]] = 1;
        }
    }
    let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < k; i++) {
        output.push(parseInt(sorted[i][0]));
    }
    return output;
};

console.log(topKElementsInList([1,2,2,3,3,3], 2)); //[2,3]
console.log(topKElementsInList([1,1,1,2,2,3], 2)); //[1,2]