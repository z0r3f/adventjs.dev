function maxProfit(prices) {
    let result = -1;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const tempProfit = prices[j] - prices[i];
            if (tempProfit > 0 && tempProfit > result) {
                result = tempProfit;
            }
        }
    }
    return result;
}
module.exports = maxProfit;