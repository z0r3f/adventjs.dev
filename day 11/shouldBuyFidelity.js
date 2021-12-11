function shouldBuyFidelity(times) {
    const UNIT_COST = 12;
    let costWithFidelityCard = 250;
    for (let i = 1; i <= times ; i++) {
        costWithFidelityCard += UNIT_COST * 0.75 ** i
    }
    const costWithoutFidelityCard = UNIT_COST * times;
    return costWithFidelityCard < costWithoutFidelityCard;
}
module.exports = shouldBuyFidelity;