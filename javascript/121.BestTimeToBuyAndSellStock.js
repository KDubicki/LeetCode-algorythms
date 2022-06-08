/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
    let min = Infinity
    let profit = 0

    prices.forEach(val => {
        min = Math.min(min, val);
        profit = Math.max(profit, val - min);
    })

    return profit
}

/**
 *  @Runtime: {92 ms}
 *  @Memory: {48.9 MB}
 */