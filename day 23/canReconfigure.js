function canReconfigure(from, to) {
    return innerCheck(from, to) && innerCheck(to, from);
}

function innerCheck(from, to) {
    if (from.length !== to.length) return false;
    const rules = new Map();

    for (let i = 0; i < from.length; i++) {
        const charFrom = from[i];
        const charTo   = to[i];
        if (rules[charFrom] !== undefined && rules[charFrom] !== charTo) return false;

        rules[charFrom] = charTo;
    }
    return true;
}
module.exports = canReconfigure;