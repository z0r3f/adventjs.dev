const getCoins = require("./getCoins");

test.each`
    change  | expected
    ${51}   | ${[1, 0, 0, 0, 0, 1]}
    ${3}    | ${[1, 1, 0, 0, 0, 0]}
    ${5}    | ${[0, 0, 1, 0, 0, 0]}
    ${16}   | ${[1, 0, 1, 1, 0, 0]}
    ${100}  | ${[0, 0, 0, 0, 0, 2]}
`('Returns coins for $change => $expected', ({change, expected}) => {
    const result = getCoins(change)
    expect(result).toStrictEqual(expected);
});