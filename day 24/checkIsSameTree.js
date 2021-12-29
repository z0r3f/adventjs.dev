function checkIsSameTree(treeA, treeB) {
    if (!treeA || !treeB) return treeA === treeB;
    if (treeA.value !== treeB.value) return false;

    const {left: leftA, right: rightA} = treeA;
    const {left: leftB, right: rightB} = treeB;
    return checkIsSameTree(leftA, leftB) && checkIsSameTree(rightA, rightB);
}
module.exports = checkIsSameTree;