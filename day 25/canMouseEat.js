function canMouseEat(direction, game) {
    const midurat = 'm';
    let row = game.findIndex(r => r.includes(midurat));
    let col = game[row].indexOf(midurat);

    if (direction === 'up') row -= 1;
    if (direction === 'down') row += 1;
    if (direction === 'right') col += 1;
    if (direction === 'left') col -= 1;

    if (row < 0 || row >= game.length) return false;
    if (col < 0 || col >= game.length) return false;

    return game[row][col] === '*';
}

module.exports = canMouseEat;