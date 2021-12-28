function countDecorations(bigTree) {
    return bigTree ? bigTree.value + countDecorations(bigTree.left) + countDecorations(bigTree.right) : 0;
}
module.exports = countDecorations;