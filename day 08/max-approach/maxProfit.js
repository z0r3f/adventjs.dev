function maxProfit(prices) {
    let result = -1;
    for (let i = 0; i < prices.length - 1; i++) {
        const max = Math.max(...prices.slice(i+1))
        const tempProfit = max - prices[i];
        if (tempProfit > 0 && tempProfit > result)
            result = tempProfit;
    }
    return result;
}
module.exports = maxProfit;