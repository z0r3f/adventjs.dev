const createXmasTree = require('./xmasTree');

function unscape(result) {
    return result.replace(/\\n/g, '\n');
}

test.each([
    [1, '*\\n#\\n#'],
    [2, '_*_\\n***\\n_#_\\n_#_'],
    [3, '__*__\\n_***_\\n*****\\n__#__\\n__#__'],
    [4, '___*___\\n__***__\\n_*****_\\n*******\\n___#___\\n___#___'],
    [5, '____*____\\n___***___\\n__*****__\\n_*******_\\n*********\\n____#____\\n____#____'],
])('Create Tree %p, returns %p', (height, result) => {
    const resultUnescape = unscape(result)
    console.log(`${resultUnescape}`);
    console.log(createXmasTree(height));
    expect(createXmasTree(height)).toStrictEqual(unscape(result));
});
