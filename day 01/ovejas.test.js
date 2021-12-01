const contarOvejas = require('./ovejas');

test('Función que devuelve una lista con todas las ovejas que sean de color rojo y que su nombre contenga las letras n y a, sin importar el orden, las mayúsculas o espacios.', () => {
    expect(contarOvejas([
        {name: 'Noa', color: 'azul'},
        {name: 'Euge', color: 'rojo'},
        {name: 'Navidad', color: 'rojo'},
        {name: 'Ki Na Ma', color: 'rojo'}
    ])).toStrictEqual([{name: 'Navidad', color: 'rojo'}, {name: 'Ki Na Ma', color: 'rojo'}]);
});