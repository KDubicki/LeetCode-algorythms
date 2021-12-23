/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
    x = x.toString()

    const length = x.length
    for (let i = 0; i < length / 2; i++) {
        if (x[i] != x[length - i - 1]) return false
    }

    return true
}

/**
 *  @Runtime: {76 ms}
 *  @Memory: {41.6 MB}
 */