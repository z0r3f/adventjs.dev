// coins[0] = 1 céntimo
// coins[1] = 2 céntimos
// coins[2] = 5 céntimos
// coins[3] = 10 céntimos
// coins[4] = 20 céntimos
// coins[5] = 50 céntimos


function getCoins(change) {
    const box = [1, 2, 5, 10, 20, 50];
    const res = [0, 0, 0, 0, 0, 0];

    for (let i = box.length-1; i >= 0 ; i--) {
        res[i] = Math.trunc(change/box[i]);
        change -= res[i] * box[i];
    }
    return res;
}
module.exports = getCoins;