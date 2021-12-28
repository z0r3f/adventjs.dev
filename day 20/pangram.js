function pangram(letter) {

    const letterZip = letter.replace(/ /g, '').toLowerCase();
    const characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    const match = Array(characters.length).fill(false);

    for (const char of letterZip) {
        const idx = characters.indexOf(char);
        match[idx] = true;
    }
    return match.reduce((acc, cur) => acc && cur, true);
}
module.exports = pangram;