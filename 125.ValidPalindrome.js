/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
    const isValid = ch => {
        if (ch >= 'a' && ch <= 'z') return true
        if (ch >= '0' && ch <= '9') return true
        return false
    }

    s = s.toLowerCase().split('')
    s = s.filter(ch => isValid(ch))

    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - i - 1]) return false
    }

    return true
}

/**
 *  @Runtime: {84 ms}
 *  @Memory: {42 MB}
 */