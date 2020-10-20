
const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(arg) {
    const finalActivity = valid(arg);
    if(finalActivity === false)
        return false;
    return Math.ceil(Math.log(MODERN_ACTIVITY / finalActivity) / (0.693 / HALF_LIFE_PERIOD));
};

function valid(s) {
    if(typeof s !== 'string')
        return false;
    const n = parseInt(s);
    return n.toString() === s && Number.isFinite(n) && n < MODERN_ACTIVITY && n > 0 ? n : false;
}
