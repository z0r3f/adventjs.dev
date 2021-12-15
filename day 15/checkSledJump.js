function checkSledJump(heights) {
    let up = false; //raising
    let down = false;
    let [previous] = heights;
    for (let i = 1; i < heights.length; i++) {
        let actual = heights[i];
        if (previous < actual) {
            if (down) return false;
            up = true;
        } else if (previous > actual) {
            down = true;
        } else {
            return false;
        }
        previous = actual
    }
    return up && down;
}

module.exports = checkSledJump;