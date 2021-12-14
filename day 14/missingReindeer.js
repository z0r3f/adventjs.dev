function missingReindeer(ids) {
    const match = Array(ids.length).fill('X')
    ids.forEach(id => match[id] = id)
    const idx = match.indexOf('X')
    return idx !== -1 ? idx : ids.length
}

module.exports = missingReindeer;