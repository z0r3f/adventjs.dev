const pangram = require("./pangram");

test.each`
    letter                                                                     | expected
    ${'Extraño pan de col y kiwi se quemó bajo fugaz vaho'}                    | ${true}
    ${'Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!'}          | ${true}
    ${'Esto es una frase larga pero no tiene todas las letras del abecedario'} | ${false}
    ${'De la a a la z, nos faltan letras'}                                     | ${false}
`(`Calculating for '$letter' => '$expected'`, ({letter, expected}) => {
    const result = pangram(letter)
    expect(result).toStrictEqual(expected);
});