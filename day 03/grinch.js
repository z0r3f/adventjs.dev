function isValid(letter) {
    const gifts = letter.split(' ');
    for (const gift of gifts) {
        if (gift.indexOf('(') === 0) {
            if (gift.indexOf(')') === gift.length - 1) {
                if (gift.length === 2) return false;
                const realGift = gift.substr(1, gift.length-2);
                if (realGift.indexOf('(') !== -1 || realGift.indexOf(')') !== -1 || realGift.indexOf('{') !== -1 || realGift.indexOf('}') !== -1 || realGift.indexOf('[') !== -1 || realGift.indexOf(']') !== -1) {
                    return false;
                }
            }
            if (gift.indexOf(')') !== gift.length - 1) return false;
        }
    }
    return true;
}

module.exports = isValid;