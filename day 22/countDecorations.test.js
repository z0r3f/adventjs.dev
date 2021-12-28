const countDecorations = require("./countDecorations");

test.each`
    tree |expected
    ${{
        value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
        left: {
            value: 2, // el nodo izquierdo necesita dos decoraciones
            left: null, // no tiene más ramas
            right: null // no tiene más ramas
        },
        right: {
            value: 3, // el nodo de la derecha necesita tres decoraciones
            left: null, // no tiene más ramas
            right: null // no tiene más ramas
        }
    }} | ${6}
    ${{
        value: 1,
        left: {
            value: 5,
            left: {
                value: 7,
                left: {
                    value: 3,
                    left: null,
                    right: null
                },
                right: null
            },
            right: null
        },
        right: {
            value: 6,
            left: {
                value: 5,
                left: null,
                right: null
            },
            right: {
                value: 1,
                left: null,
                right: null
            }
        }
    }} | ${28}
`(`Calculating for $tree => '$expected'`, ({tree, expected}) => {
    const result = countDecorations(tree)
    expect(result).toStrictEqual(expected);
});