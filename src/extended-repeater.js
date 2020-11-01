module.exports = function repeater(str, options) {
  str = '' + str;
  const addition = options.addition !== undefined ? '' + options.addition : '';
  const repeatTimes = options.repeatTimes || 1;
  const separator  = options.separator || '+';
  const additionSeparator   = options.additionSeparator || '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const strWithAddition = str + (new Array(additionRepeatTimes).fill(addition).join(additionSeparator));
  return new Array(repeatTimes).fill(strWithAddition).join(separator);
};
