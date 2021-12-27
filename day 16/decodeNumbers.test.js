const decodeNumbers = require("./decodeNumbers");

test.each`
    symbols           | expected    
    ${'...'}          | ${3} 
    ${'.,'}           | ${4} // (5 - 1)
    ${',.'}           | ${6} // (5 + 1)
    ${',...'}         | ${8} // (5 + 3)
    ${'.........!'}   | ${107} // (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
    ${'.;'}           | ${49} // (50 - 1)
    ${'..,'}          | ${5} // (-1 + 1 + 5)
    ${'..,!'}         | ${95} // (1 - 1 - 5 + 100)
    ${'.;!'}          | ${49} // (-1 -50 + 100)
    ${'!!!'}          | ${300} //
    ${';!'}           | ${50} //
    ${';.W'}          | ${NaN} //
`('Calculating for $symbols => $expected', ({symbols, expected}) => {
    const result = decodeNumbers(symbols)
    expect(result).toStrictEqual(expected);
});