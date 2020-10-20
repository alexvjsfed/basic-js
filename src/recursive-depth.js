

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        return !Array.isArray(arr) ? 0 : (arr.length === 0 ? 1 : 1 + Math.max(...(arr.map(this.calculateDepth.bind(this)))))
    }
};
