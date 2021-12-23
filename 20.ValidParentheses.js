/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
    if (s.length % 2 === 1) return false

    const brackets = {
        'open': ['(', '{', '['],
        'close': [')', '}', ']'],
    }

    const stack = []

    for (let i = 0; i < s.length; i++) {
        if (brackets.open.includes(s[i])) {
            const openBracketIndex = brackets.open.indexOf(s[i])
            stack.push(brackets.close[openBracketIndex])
            continue;
        }

        if (s[i] !== stack[stack.length - 1]) return false
        else stack.pop()
    }

    return stack.length === 0
}

/**
 *  @Runtime: {76 ms}
 *  @Memory: {41.6 MB}
 */



