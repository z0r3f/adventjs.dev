const isValid = require('./grinch');

test.each([
    ['bici coche (balón) bici coche peluche', true],
    ['(muñeca) consola bici', true],
    ['bici coche (balón bici coche', false],
    ['peluche (bici [coche) bici coche balón', false],
    ['(peluche {) bici', false],
    ['() bici', false],
    ['(a() bici (a)', false]])(' Grinch con %p, returns %p', (letter, result) => {
        expect(isValid(letter)).toStrictEqual(result);
    });
