function learn(time, courses) {
    let choose = null;
    let maxTime = 0;

    for (let i = 0; i < courses.length - 1; i++) {
        for (let j = i+1; j < courses.length; j++) {
            const actual = courses[i] + courses[j];
            if (actual === time) return [i, j];
            if (actual < time && actual > maxTime) {
                maxTime = actual;
                choose = [i, j];
            }
        }
    }
    return choose;
}
module.exports = learn;