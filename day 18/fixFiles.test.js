const fixFiles = require("./fixFiles");

test.each`
    files                                                | expected    
    ${['photo', 'postcard', 'photo', 'photo', 'video']}  | ${['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']}
    ${['file', 'file', 'file', 'game', 'game']}          | ${['file', 'file(1)', 'file(2)', 'game', 'game(1)']}
    ${['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']} | ${['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']}
`('Calculating for $files => $expected', ({files, expected}) => {
    const result = fixFiles(files)
    expect(result).toStrictEqual(expected);
});