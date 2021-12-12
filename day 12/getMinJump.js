function getMinJump(obstacles) {
    const max = obstacles.reduce((acc, crr) => {
        return acc > crr ? acc : crr;
    }, 0);

    for (let minJump = 1; ; minJump++) {
        let stumbled = false
        for (let i = 0; i <= max + 1 && !stumbled; i += minJump) {
            stumbled = obstacles.includes(i);
        }
        if (!stumbled) return minJump;
    }
}

module.exports = getMinJump;