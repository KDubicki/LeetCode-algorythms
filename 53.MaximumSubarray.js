/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
    let max = -1  * Math.abs(2 * nums[0])
    let current = -1 * Math.abs(2* nums[0])

    nums.forEach(val => {
        current += val
        if (val > current) current = val
        max = Math.max(max, current)
    })

    return max
}

/**
 *  @Runtime: {104 ms}
 *  @Memory: {49.2 MB}
 */
