/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    const nums = nums1.concat(nums2)
    nums.sort((a, b) => a - b)

    if (nums.length % 2 === 1) return nums[Math.floor(nums.length / 2)]

    let index = Math.floor(nums.length / 2)
    return (nums[index] + nums[index - 1]) / 2
}