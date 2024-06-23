//Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
// Example 1:
// Input: nums = [1, 2, 3, 3]

// Output: true

const duplicateInteger = (nums) => {
    let result = {};
    for (let i = 0; i < nums.length; i++) {
        if (result[nums[i]] !== undefined) {
            return true;
        }
        result[nums[i]] = i;
    }
    return false;
};

console.log(duplicateInteger([1, 2, 3, 3])); //true
console.log(duplicateInteger([1, 2, 3, 4])); //false