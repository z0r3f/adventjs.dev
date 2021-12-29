const canMouseEat = require("./canMouseEat");

const room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*']
]

const room2 = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*']
]

test.each`
    direction  | game     | expected
    ${'up'}    | ${room}  | ${false}
    ${'down'}  | ${room}  | ${true}
    ${'right'} | ${room}  | ${false}
    ${'left'}  | ${room}  | ${false}
    ${'up'}    | ${room2}  | ${false}
    ${'down'}  | ${room2}  | ${false}
    ${'right'} | ${room2}  | ${true}
    ${'left'}  | ${room2}  | ${false}
`(`Calculating for $direction and $game => '$expected'`, ({direction, game, expected}) => {
    const result = canMouseEat(direction, game)
    expect(result).toStrictEqual(expected);
});