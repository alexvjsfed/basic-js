

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const turns = (function h(n) {
        /// передвинуть все сверху на C, затем нижний диск на B, затем все с C на B
        /// (нижний диск = 1 ход) + 2 * (все сверху на C, потом на B)
        return n === 1 ? 1 : 1 + 2 * h(n - 1);
    })(disksNumber);
    return {turns: turns, seconds: Math.floor(turns / turnsSpeed * 3600)}
};
