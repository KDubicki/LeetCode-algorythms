/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {
    return new Set(nums).size !== nums.length
}

/**
 *  @Runtime: {127 ms}
 *  @Memory: {47.4 MB}
 */