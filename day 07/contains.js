function contains(store, product) {
    let branch = false;

    for (let value of Object.values(store)) {
        if (typeof value === 'object' && value !== null) {
            branch = contains(value, product);
        }
        if (value === product) {
            return true;
        }
    }
    return branch;
}
module.exports = contains;