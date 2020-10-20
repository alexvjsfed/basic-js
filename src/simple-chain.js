

const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        this.chain.push(value);
        return this;
    },
    removeLink(position) {
        if(typeof position !== 'number' || position < 1 || position > this.chain.length) {
            this.chain.splice(0);
            throw new Error('invalid argument');
        }
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        const result = this.toString();
        this.chain.splice(0);
        return result;
    },
    toString() {
        return this.chain.map(x => `( ${x} )`).join('~~')
    }
};

module.exports = chainMaker;
