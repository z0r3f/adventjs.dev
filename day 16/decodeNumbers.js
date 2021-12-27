function decodeNumbers(symbols) {
    let idxPrevChar = -1;
    const order = ['.', ',', ':', ';', '!'];
    let solution = 0;
    for (let i = symbols.length-1; i >= 0; i--) {
        const char = symbols[i];
        let idxActual = order.indexOf(char);
        if (idxActual === -1) return NaN;
        let value = 0;
        switch (char) {
            case '.': value = 1; break;
            case ',': value = 5; break;
            case ':': value = 10; break;
            case ';': value = 50; break;
            case '!': value = 100; break;
        }
        if (idxActual >= idxPrevChar) {
            solution += value;
        } else {
            solution -= value;
        }
        idxPrevChar = idxActual;
    }
    return solution;
}

module.exports = decodeNumbers;