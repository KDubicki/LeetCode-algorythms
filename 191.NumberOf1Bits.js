/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = n => {
    if (n === 0)    return 0
    if (n % 2 === 0) return hammingWeight(n / 2)
    else return hammingWeight(Math.floor(n / 2)) + 1
}

/**
 *  @Runtime: {124 ms}
 *  @Memory: {40.2 MB}
 */

const hammingWeight = n => {
    n = n.toString(2).split('')
    const isOne = (counter, bit) => counter += (bit === '1') ? 1 : 0
    let result = n.reduce(isOne, 0)

    return result
}

/**
 *  @Runtime: {146 ms}
 *  @Memory: {40 MB}
 */