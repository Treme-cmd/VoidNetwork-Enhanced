const base32Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

function base32Encode(input) {
    const bytes = new TextEncoder().encode(input);
    let binaryString = '';
    for (let byte of bytes) {
        binaryString += byte.toString(2).padStart(8, '0');
    }

    let base32String = '';
    for (let i = 0; i < binaryString.length; i += 5) {
        const chunk = binaryString.substring(i, i + 5);
        const index = parseInt(chunk.padEnd(5, '0'), 2);
        base32String += base32Alphabet[index];
    }

    while (base32String.length % 8 !== 0) {
        base32String += '=';
    }

    return base32String;
}
function base32Decode(base32String) {
    base32String = base32String.replace(/=+$/, '');

    let binaryString = '';
    for (let char of base32String) {
        const index = base32Alphabet.indexOf(char);
        binaryString += index.toString(2).padStart(5, '0');
    }

    const bytes = [];
    for (let i = 0; i < binaryString.length; i += 8) {
        const byte = binaryString.substring(i, i + 8);
        if (byte.length === 8) {
            bytes.push(parseInt(byte, 2));
        }
    }

    return new TextDecoder().decode(new Uint8Array(bytes));
}