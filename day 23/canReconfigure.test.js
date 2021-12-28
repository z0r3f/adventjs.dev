const canReconfigure = require("./canReconfigure");

test.each`
    from      | to        | expected
    ${'BAL'}  | ${'LIB'}  | ${true}
    ${'CON'}  | ${'JUU'}  | ${false}
    ${'XBOX'} | ${'XXBO'} | ${false}
    ${'XBOX'} | ${'XOBX'} | ${true}
    ${'MMM'}  | ${'MID'}  | ${false}
    ${'AA'}   | ${'MID'}  | ${false}
`(`Calculating for $from and $to => '$expected'`, ({from, to, expected}) => {
    const result = canReconfigure(from, to)
    expect(result).toStrictEqual(expected);
});