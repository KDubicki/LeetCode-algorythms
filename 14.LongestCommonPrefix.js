/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
    const length = strs.length;
    strs.sort()

    let end = Math.min(strs[0].length, strs[length - 1].length)
    let i = 0
    while (i < end && strs[0][i] == strs[length - 1][i]) i++
    let prefix = strs[0].substring(0, i)
    return prefix
}

// Tests
//
//     Example 1:
//
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
//
//     Example 2:
//
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.