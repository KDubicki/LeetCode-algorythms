/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = n => {
    n = n.toString(2).padStart(32, '0').split('').reverse().join('')
    return parseInt(n, 2)
}

/**
 *  @Runtime: {135 ms}
 *  @Memory: {40.3 MB}
 */