const getMinJump = require("./getMinJump");

test.each`
    obstacles  | expected
    ${[5, 3, 6, 8, 7]}  | ${9}
    ${[2, 4, 6, 8, 10]} | ${7}
    ${[1, 2, 3, 5]}     | ${4}
    ${[3, 7, 5]}        | ${2}
    ${[9, 5, 1]}        | ${2}
`('The min jump for $obstacles? => $expected', ({obstacles, expected}) => {
    const result = getMinJump(obstacles)
    expect(result).toStrictEqual(expected);
});