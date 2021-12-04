function createXmasTree(height) {
    return createLineTree(0, height-1, '_', '*') + '\n' +
           createLineTree(height-1,0, '_', '#') + '\n' +
           createLineTree(height-1,0, '_', '#');
}
function createLineTree(fill, leaf, fillChar, leafChar) {
    let line = '';
    let filled = '';
    for (let i = 0; i < fill; i++) { filled += fillChar; }
    let branch = '';
    for (let i = 0; i < leaf; i++) { branch += leafChar; }
    line =  filled + branch + leafChar + branch + filled;

    if (leaf > 0) return createLineTree(fill+1, leaf-1, fillChar, leafChar) + '\n' + line;
    else return line;
}
module.exports = createXmasTree;