const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];
// const COLORS = ['red'];

// given a hash, return the color that created the hash
function findColor(hash) {
    let result = ""
    for(let i = 0; i < COLORS.length; i++) {
        const color = COLORS[i]
        // To take the hash of a color, first use utf8ToBytes to translate the string to bytes.
        const colorBytes = utf8ToBytes(color)
        // console.log(colorBytes, '<-- colorBytes')

        // Use sha256 to hash it
        const colorHash = sha256(colorBytes)
        // console.log(colorHash, '<-- colorHash')

        // console.log(toHex(colorHash))
        if(toHex(colorHash) === toHex(hash)) {
            result = color
        }
    }

    return result ? result : "Not found"
}

// module.exports = findColor;

console.log(findColor(sha256(utf8ToBytes('red'))))
console.log(findColor(sha256(utf8ToBytes('green'))))
console.log(findColor(sha256(utf8ToBytes('blue'))))
console.log(findColor(sha256(utf8ToBytes('black'))))

// Given a SHA256 hash, find the color input that would generate that hash. You can assume that all the hashes be generated only from colors provided in the COLORS array.

// 1. To take the hash of a color, first use utf8ToBytes to translate the string to bytes. Then, use sha256 to hash it.
// 2. When you want to compare two hashes, first use toHex to turn each hash from a Uint8Array to a string of hexadecimal characters.
// So comparing two hashes would look like this:

// const a = "apple";
// const b = "banana";

// const aBytes = utf8ToBytes(a);
// const bBytes = utf8ToBytes(b);

// const aHash = sha256(aBytes);
// const bHash = sha256(bBytes);

// console.log(toHex(aHash) === toHex(aHash)); // true
// console.log(toHex(aHash) === toHex(bHash)); // false