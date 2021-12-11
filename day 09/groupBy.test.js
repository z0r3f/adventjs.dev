const groupBy = require("./groupBy");

test.each`
    collection           | it                    | expected
    ${[6.1, 4.2, 6.3]} | ${Math.floor} | ${{6: [6.1, 6.3], 4: [4.2]}}
    ${['one', 'two', 'three']} | ${'length'} | ${{3: ['one', 'two'], 5: ['three']}}
    ${[{age: 23}, {age: 24}]} | ${'age'} | ${{23: [{age: 23}], 24: [{age: 24}]}}
    ${[1397639141184, 1363223700000]} | ${timestamp => new Date(timestamp).getFullYear()} | ${{2013: [1363223700000], 2014: [1397639141184]}}
    ${[
        {title: 'JavaScript: The Good Parts', rating: 8},
        {title: 'Aprendiendo Git', rating: 10},
        {title: 'Clean Code', rating: 9},
    ]} | ${'rating'} | ${{
        8: [{title: 'JavaScript: The Good Parts', rating: 8}],
        9: [{title: 'Clean Code', rating: 9}],
        10: [{title: 'Aprendiendo Git', rating: 10}]
    }} 
`('Groupping $collection by $it => $expected', ({collection, it, expected}) => {
    const result = groupBy(collection, it)
    expect(result).toStrictEqual(expected);
});