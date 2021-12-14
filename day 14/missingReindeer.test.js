const missingReindeer = require("./missingReindeer");

test.each`
    ids                            | expected
    ${[0, 2, 3]}                   | ${1}
    ${[5, 6, 1, 2, 3, 7, 0]}       | ${4}
    ${[0, 1]}                      | ${2}
    ${[3, 0, 1]}                   | ${2}
    ${[9, 2, 3, 5, 6, 4, 7, 0, 1]} | ${8}
    ${[0]}                         | ${1}
`('Searching for $ids => $expected', ({ids, expected}) => {
    const result = missingReindeer(ids)
    expect(result).toStrictEqual(expected);
});