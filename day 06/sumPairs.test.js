const sumPairs = require('./sumPairs');

test.each`
    numbers                     | result | expected
    ${[3, 5, 7, 2]}             | ${10}  | ${[3, 7]}
    ${[-3, -2, 7, -5]}          | ${10}  | ${null}
    ${[2, 2, 3, 1]}             | ${4}   | ${[2, 2]}
    ${[6, 7, 1, 2]}             | ${8}   | ${[6, 2]}
    ${[0, 2, 2, 3, -1, 1, 5]}   | ${6}   | ${[1, 5]}
`('$expected array by sum $result with $numbers', ({numbers, result, expected}) => {
    expect(sumPairs(numbers, result)).toStrictEqual(expected);
});
