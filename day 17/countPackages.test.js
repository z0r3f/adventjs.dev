const countPackages = require("./countPackages");

test.each`
    carriers           | carrierID | expected    
    ${[
        ['dapelu', 5, ['midu', 'jelowing']],
        ['midu', 2, []],
        ['jelowing', 2, []]
    ]}          | ${'dapelu'}  | ${9}
    ${[['lolivier', 8, ['camila', 'jesuspoleo']],
        ['camila', 5, ['sergiomartinez', 'conchaasensio']],
        ['jesuspoleo', 4, []],
        ['sergiomartinez', 4, []],
        ['conchaasensio', 3, ['facundocapua', 'faviola']],
        ['facundocapua', 2, []],
        ['faviola', 1, []]
    ]}          | ${'camila'}  | ${15}
`('Calculating for $carrierID => $expected', ({carriers, carrierID, expected}) => {
    const result = countPackages(carriers, carrierID)
    expect(result).toStrictEqual(expected);
});