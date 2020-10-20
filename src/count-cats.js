

module.exports = function countCats(m) {
    if (!Array.isArray(m)) {
        return m === '^^' ? 1 : 0;
    } else {
        return m.reduce((acc, el) => acc + countCats(el), 0)
    }
};
