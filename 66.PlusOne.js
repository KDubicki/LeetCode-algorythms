/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {
    const sum = BigInt(digits.join('')) + BigInt(1)
    return sum.toString().split('')
}

/**
 *  @Runtime: {60 ms}
 *  @Memory: {39.2 MB}
 */
