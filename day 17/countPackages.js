function countPackages(carriers, carrierID) {
    for (const carrier of carriers) {
        if (carrier[0] === carrierID) {
            let acc = carrier[1];
            carrier[2].forEach(c => acc += countPackages(carriers, c));
            return acc;
        }
    }
    return 0;
}
module.exports = countPackages;