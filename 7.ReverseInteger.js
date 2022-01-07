/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
    const isNegativ = (x < 0)
    x = x.toString()
    if (isNegativ) x = x.substring(1) + '-'
    x = x.split('').reverse().join('')
    x = parseInt(x)

    if (x < -2147483648 || x > 2147483647) return 0
    return x
}

/**
 *  @Runtime: {111 ms}
 *  @Memory: {40.3 MB}
 */