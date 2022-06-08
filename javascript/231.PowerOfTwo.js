/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = n => {
    n = n.toString(2).split('').reverse()
    const firstOne = n.indexOf('1')
    return firstOne === (n.length - 1)
}

/**
 *  @Runtime: {140 ms}
 *  @Memory: {39.9 MB}
 */

const isPowerOfTwo = n => {
    let x = 1
    while (x < n) x *= 2
    return x === n
}

/**
 *  @Runtime: {123 ms}
 *  @Memory: {40.4 MB}
 */