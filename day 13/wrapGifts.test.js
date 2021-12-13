const wrapGifts = require("./wrapGifts");

test.each`
    gifts  | expected
    ${["📷", "⚽️"]}  | ${[
    '****',
    '*📷*',
    '*⚽️*',
    '****'
]}
    ${["🏈🎸", "🎮🧸"]} | ${[
    '******',
    '*🏈🎸*',
    '*🎮🧸*',
    '******'
]}
    ${["📷"]}     | ${[
    '****',
    '*📷*',
    '****'
]}
    ${[]}     | ${[]}
`('Wrapping gifts for $gifts => $expected', ({gifts, expected}) => {
    const result = wrapGifts(gifts)
    expect(result).toStrictEqual(expected);
});