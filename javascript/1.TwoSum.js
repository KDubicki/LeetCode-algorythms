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

/**
 *  @Runtime: {120 ms}
 *  @Memory: {39.8 MB}
 */

//-----------------------------------------------------------------------------

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

/**
 *  @Runtime: {168 ms}
 *  @Memory: {39.6 MB}
 */

