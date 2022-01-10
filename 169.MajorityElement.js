/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
    let currNum = nums[0]
    let counter = 0

    nums.forEach(num => {
        if (currNum === num) counter++
        else {
            counter--
            if (!counter) {
                currNum = num
                counter = 1
            }
        }
    })

    return currNum
}

/**
 *  @Runtime: {111 ms}
 *  @Memory: {40.5 MB}
 */