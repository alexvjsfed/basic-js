

module.exports = arr => Array.isArray(arr) ? arr.map(x => typeof x === 'string' ? x.trimLeft()[0].toUpperCase() : '').sort().join('') : false;
