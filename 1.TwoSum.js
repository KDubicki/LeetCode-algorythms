/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Better Runtime
const twoSum = (nums, target) => {
    length = nums.length

    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (nums[i] + nums[j] == target) return [i, j]
        }
    }
}

// const twoSum = (nums, target) => {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums.includes(target - nums[i])) {
//             const newIndex = nums.indexOf(target - nums[i])
//             if (i != newIndex) {
//                 return i < newIndex ? [i, newIndex] : [newIndex, i]

//             }
//         }
//     }
// }

//Tests
//     Example 1:
//
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
//
//     Example 2:
//
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
//
//     Example 3:
//
// Input: nums = [3,3], target = 6
// Output: [0,1]