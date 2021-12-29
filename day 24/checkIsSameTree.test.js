const checkIsSameTree = require("./checkIsSameTree");

const tree = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null }
}

const tree2 = {
    value: 1,
    left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
    right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

test.each`
    treeA    | treeB     | expected
    ${tree}  | ${tree}   | ${true}
    ${tree}  | ${tree2}  | ${false}
    ${tree2} | ${tree2}  | ${true}
`(`Calculating for trees => '$expected'`, ({treeA, treeB, expected}) => {
    const result = checkIsSameTree(treeA, treeB)
    expect(result).toStrictEqual(expected);
});