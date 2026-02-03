// Utility functions for number formatting

function formatNumberWithCommas(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    return 'NaN';
  }

  if (!isFinite(number)) {
    return number > 0 ? 'Infinity' : '-Infinity';
  }

  return number.toLocaleString('en-US');
}

module.exports = { formatNumberWithCommas };
