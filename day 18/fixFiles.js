function fixFiles(files) {
    const ret = [];

    files.forEach((currValue, index) => {
        const times = files.slice(0, index).reduce((acc, currentValue) => {
            return acc + (currValue === currentValue ? 1 : 0);
        }, 0);
        const newElement = currValue + (times > 0 ? `(${times})` : '');
        ret.push(newElement);
    })
    return ret;
}
module.exports = fixFiles;