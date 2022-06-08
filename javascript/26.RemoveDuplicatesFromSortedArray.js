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

/**
 *  @Runtime: {76 ms}
 *  @Memory: {41.6 MB}
 */