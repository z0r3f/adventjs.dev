const checkSledJump = require("./checkSledJump");

test.each`
    heights                     | expected    
    ${[1, 2, 3, 2, 1]}          |${true}
    ${[0, 1, 0]}                |${true}
    ${[0, 3, 2, 1]}             |${true}
    ${[0, 1000, 1]}             |${true}
    ${[2, 4, 4, 6, 2]}          |${false}
    ${[1, 2, 3]}                |${false}
    ${[1, 2, 3, 2, 1, 2, 3]}    |${false}
`('Searching for $heights => $expected', ({heights, expected}) => {
    const result = checkSledJump(heights)
    expect(result).toStrictEqual(expected);
});