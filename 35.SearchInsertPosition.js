/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    if (target < nums[0]) return 0
    let first = 0
    let last = nums.length - 1

    while (first < last) {
        let mid = Math.round((first + last) / 2)
        if (target > nums[mid]) first = mid + 1
        else last = mid - 1
    }

    return target <= nums[last] ? last : last + 1
}

// Implementation for O( log(n) ) runtime complexity
/**
 *  @Runtime: {68 ms}
 *  @Memory: {39.7 MB}
 */