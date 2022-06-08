/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = columnNumber => {
    let n = columnNumber - 1
    if (n < 26) return String.fromCharCode(65 + n)
    return convertToTitle(Math.floor(n / 26)) + convertToTitle((n % 26) + 1)
}

/**
 *  @Runtime: {64 ms}
 *  @Memory: {38.5 MB}
 */