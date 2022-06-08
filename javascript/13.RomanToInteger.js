/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
    const value = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    let result = 0
    let beforeValue = 0
    for (let i = 0; i < s.length; i++) {
        result += value[s[i]]
        if (value[s[i]] > beforeValue)  result -= 2 * beforeValue
        beforeValue = value[s[i]]
    }

    return result
}

/**
 *  @Runtime: {76 ms}
 *  @Memory: {41.6 MB}
 */