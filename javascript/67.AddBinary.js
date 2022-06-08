/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
    a = a.split('').reverse()
    b = b.split('').reverse()
    let newBinary = []

    const length =  Math.max(a.length, b.length)
    let index = 0
    let carry = 0
    while (index < length) {
        let bitA = a[index] ? parseInt(a[index]) : 0
        let bitB = b[index] ? parseInt(b[index]) : 0
        const sum = carry + bitA + bitB
        index++

        carry = Math.floor(sum / 2)
        newBinary.unshift(sum % 2)
    }

    if (carry > 0) newBinary.unshift(carry)
    return newBinary.join("")
}

/**
 *  @Runtime: {80 ms}
 *  @Memory: {40.7 MB}
 */