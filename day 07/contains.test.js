const contains = require('./contains');

const almacen = {
    'estanteria1': {
        'cajon1': {
            'producto1': 'coca-cola',
            'producto2': 'fanta',
            'producto3': 'sprite'
        }
    },
    'estanteria2': {
        'cajon1': 'vacio',
        'cajon2': {
            'producto1': 'pantalones',
            'producto2': 'camiseta' // <- ¡Está aquí!
        }
    }
}

const otroAlmacen = {
    'baul': {
        'fondo': {
            'objeto': 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando'
        }
    }
}

test.each`
    store           | product                    | expected
    ${almacen}      | ${'camiseta'}  | ${true}
    ${otroAlmacen}  | ${'gameboy'}               | ${false}
`('Search $product => $expected', ({store, product, expected}) => {
    const result = contains(store, product)
    expect(result).toBe(expected);
});