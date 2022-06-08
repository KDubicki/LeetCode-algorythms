/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = s => {
    s = s.trim()
    const words = s.split(' ')
    return words[words.length - 1].length
}

/**
 *  @Runtime: {64 ms}
 *  @Memory: {39.3 MB}
 */
