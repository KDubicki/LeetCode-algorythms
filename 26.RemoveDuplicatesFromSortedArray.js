/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
    let previous = null
    let counter = 0

    nums.forEach((val, index) => {
        nums[index] = null
        if (val !== previous) {
            nums[counter++] = val
            previous = val
        }
    })

    return counter
}

// Runtime: 76 ms, faster than 97.57% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 41.6 MB, less than 38.66% of JavaScript online submissions for Remove Duplicates from Sorted Array.