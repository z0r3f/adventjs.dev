const shouldBuyFidelity = require("./shouldBuyFidelity");

test.each`
    times  | expected
    ${1}   | ${false}
    ${2}   | ${false}
    ${5}   | ${false}
    ${100} | ${true}
`('is cost-effective for $times? => $expected', ({times, expected}) => {
    const result = shouldBuyFidelity(times)
    expect(result).toStrictEqual(expected);
});