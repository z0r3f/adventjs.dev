function maxProfit(prices) {
    return prices.reduce( (total, currentValue, currentIndex) => {
        const tempProfit = Math.max(...prices.slice(currentIndex + 1)) - currentValue;
        return tempProfit > 0 && tempProfit > total ? tempProfit : total;
    }, -1);
}
module.exports = maxProfit;