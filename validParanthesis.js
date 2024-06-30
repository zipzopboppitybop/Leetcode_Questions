// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

// The input string s is valid if and only if:

// Every open bracket is closed by the same type of close bracket.
// Open brackets are closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Return true if s is a valid string, and false otherwise.

// Example 1:

// Input: s = "[]"

// Output: true

const validParanthesis = (s) => {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else {
            let last = stack.pop();
            if (s[i] !== map[last]) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
}

console.log(validParanthesis("()")); //true
console.log(validParanthesis("()[]{}")); //true
console.log(validParanthesis("(]")); //false
console.log(validParanthesis("([{}])")); //true