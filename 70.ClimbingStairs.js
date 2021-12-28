/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
    let n1 = 1
    let n2 = 1

    for (let i = 1; i < n; i++) {
        n2 += n1
        n1 = n2 - n1
    }

    return n2
}

/**
 *  @Runtime: {68 ms}
 *  @Memory: {38.6 MB}
 */