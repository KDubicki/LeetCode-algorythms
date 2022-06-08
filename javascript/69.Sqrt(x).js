/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = x => {
    let root = 1
    while (x >= (root * root)) root++
    return root - 1
}

/**
 *  @Runtime: {104 ms}
 *  @Memory: {40.2 MB}
 */