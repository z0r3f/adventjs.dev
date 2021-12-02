function listGifts(letter) {
    const gifts = letter.split(' ');
    const result = {};
    for (const gift of gifts) {
        if (gift && gift.indexOf('_') !== 0) {
            if (!result[gift]) {
                result[gift] = 1
            } else {
                result[gift] = result[gift] + 1;
            }
        }
    }
    return result;
}
module.exports = listGifts;