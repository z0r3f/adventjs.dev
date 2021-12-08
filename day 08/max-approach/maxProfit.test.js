const maxProfit = require('./maxProfit');

test.each`
    prices                           | expected
    ${[39, 18, 29, 25, 34, 32, 5]}   | ${16}
    ${[10, 20, 30, 40, 50, 60, 70]}  | ${60}
    ${[18, 15, 12, 11, 9, 7]}        | ${-1}
    ${[3, 3, 3, 3, 3]}               | ${-1}
`('For $prices => $maxProfit', ({prices, expected}) => {
    const result = maxProfit(prices)
    expect(result).toBe(expected);
});