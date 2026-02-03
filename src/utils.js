function formatNumberWithCommas(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    return '';
  }
  return number.toLocaleString('en-US');
}

module.exports = { formatNumberWithCommas };
