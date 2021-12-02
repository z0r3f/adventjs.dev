const listGifts = require('./listGifts');

test('Función que devuelve la lista de regalos agrupados', () => {
    expect(listGifts('bici coche      balón _playstation bici coche peluche')).toStrictEqual({
        bici: 2,
        coche: 2,
        balón: 1,
        peluche: 1
    });
});