const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

module.exports = class VigenereCipheringMachine {
    constructor(mode = true) {
        this.mode = mode;
    }

    encrypt(message, key) {
        const arrayKey = [];
        const arrayRes = [];
        this.message = message.toUpperCase();
        this.key = key.toUpperCase();

        for (let i = 0; i < this.key.length; i++) {
            arrayKey.push(ALPHABET.indexOf(this.key[i]));
        }

        for (let j = 0, k = 0; j < this.message.length; j++, k++) {
            if (!/[A-Z]/.test(this.message[j])) {
                arrayRes.push(this.message[j]);
                k -= 1;
                continue;
            }
            const messageCharCode = ALPHABET.indexOf(this.message[j]);
            const keyCharCode = (k < arrayKey.length) ? arrayKey[k] : arrayKey[k % arrayKey.length];
            const newCharCode = (messageCharCode + keyCharCode >= ALPHABET.length)
                ? messageCharCode + keyCharCode - ALPHABET.length
                : messageCharCode + keyCharCode;

            arrayRes.push(ALPHABET[newCharCode]);
        }
        return this.mode ? arrayRes.join('') : arrayRes.reverse().join('');
    }

    decrypt(message, key) {
        const arrayKey = [];
        const arrayRes = [];
        this.message = message.toUpperCase();
        this.key = key.toUpperCase();

        for (let i = 0; i < this.key.length; i++) {
            arrayKey.push(ALPHABET.indexOf(this.key[i]));
        }

        for (let j = 0, k = 0; j < this.message.length; j++, k++) {
            if (!/[A-Z]/.test(this.message[j])) {
                arrayRes.push(this.message[j]);
                k -= 1;
                continue;
            }
            const messageCharCode = ALPHABET.indexOf(this.message[j]);
            const keyCharCode = (k < arrayKey.length) ? arrayKey[k] : arrayKey[k % arrayKey.length];
            const newCharCode = (messageCharCode - keyCharCode >= 0)
                ? messageCharCode - keyCharCode
                : messageCharCode - keyCharCode + ALPHABET.length;

            arrayRes.push(ALPHABET[newCharCode]);
        }
        return this.mode ? arrayRes.join('') : arrayRes.reverse().join('');
    }
}
