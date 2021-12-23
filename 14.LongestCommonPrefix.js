/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
    const length = strs.length;
    strs.sort()

    let end = Math.min(strs[0].length, strs[length - 1].length)
    let i = 0
    while (i < end && strs[0][i] == strs[length - 1][i]) i++
    let prefix = strs[0].substring(0, i)
    return prefix
}

/**
 *  @Runtime: {76 ms}
 *  @Memory: {41.6 MB}
 */