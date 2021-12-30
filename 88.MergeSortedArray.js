/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
    let i = 0
    while (i < n) {
        nums1[m + i] = nums2[i]
        i++
    }

    nums1.sort((a, b) => a - b)
    return nums1
}

/**
 *  @Runtime: {72 ms}
 *  @Memory: {39.2 MB}
 */