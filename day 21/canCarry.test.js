const canCarry = require("./canCarry");

test.each`
    capacity | trip | expected
    ${4} | ${[[2, 5, 8], [3, 6, 10]]} | ${false}
    ${3} | ${[[1, 1, 5], [2, 2, 10]]} | ${true}
    ${3} | ${[[2, 1, 5],[3, 5, 7]]} | ${true}
    ${4} | ${[[2, 3, 8],[2, 5, 7]]} | ${true}
    ${1} | ${[[2, 3, 8]]} | ${false}
    ${2} | ${[[1, 2, 4], [2, 3, 8]]} | ${false}
`(`Calculating for $capacity and $trip => '$expected'`, ({capacity, trip, expected}) => {
    const result = canCarry(capacity, trip)
    expect(result).toStrictEqual(expected);
});