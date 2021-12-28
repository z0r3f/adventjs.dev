function canCarry(capacity, trip) {
    let [giftsPrev, _, endPrev] = [0,0,0];

    for (const point of trip) {
        const [gifts, start] = point;
        if (gifts > capacity) return false;
        if (start < endPrev && giftsPrev + gifts > capacity) return false;
        [giftsPrev, _, endPrev] = point;
    }
    return true;
}
module.exports = canCarry;