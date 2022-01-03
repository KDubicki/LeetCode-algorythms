/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
    nums.sort((a, b) => a - b)
    for (let i = nums.length - 1; i >= 0; i--) {
        let findIndex = nums.indexOf(nums[i])
        if (findIndex === i) return nums[i]
        i = findIndex
    }
}

/**
 *  @Runtime: {144 ms}
 *  @Memory: {41.8 MB}
 */