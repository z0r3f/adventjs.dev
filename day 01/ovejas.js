function contarOvejas(ovejas) {
    return ovejas.filter(oveja => oveja.color === 'rojo' && oveja.name.search(/[an]/gi) !== -1)
}
module.exports = contarOvejas;