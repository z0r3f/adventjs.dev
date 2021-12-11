// Alternative
// https://github.com/pmareke/adventJS/blob/main/09.spec.js

// function groupBy(collection, it) {
//   const isFunction = (it) => typeof it === 'function';
//   return collection.reduce((acc, value) => {
//     const key = isFunction(it) ? it(value) : value[it];
//     acc[key] = [...(acc[key] ?? []), value];
//     return acc;
//   }, {});
// }

function groupBy(collection, it) {
    if (typeof it === 'function') {
        return collection.reduce((rv, x) => {
            (rv[it(x)] = rv[it(x)] || []).push(x);
            return rv;
        }, {});

    } else {
       return collection.reduce((rv, x) => {
           (rv[x[it]] = rv[x[it]] || []).push(x);
           return rv;
       }, {});
    }
}
module.exports = groupBy;