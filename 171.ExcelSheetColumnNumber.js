/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = columnTitle => {
    let answer = ''
    let chars = columnTitle.split('')

    chars.forEach(ch => {
        let char = ch.charCodeAt() - 64
        answer = !answer ? 0 : answer * 26
        answer += char
    })

    return answer
}

/**
 *  @Runtime: {132 ms}
 *  @Memory: {40.1 MB}
 */