function wrapGifts(gifts) {
    if (gifts.length === 0) return gifts;
    const sizeBox = gifts[0].length + 2;
    return ['*'.repeat(sizeBox), ...gifts.map(gift => `*${gift}*`), '*'.repeat(sizeBox)];
}

module.exports = wrapGifts;