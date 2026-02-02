// Utility functions for formatting

/**
 * Formats a number with commas as thousand separators.
 * @param {number} number - The number to format
 * @returns {string} The formatted number string with commas
 */
function formatNumberWithCommas(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    return String(number);
  }

  const parts = number.toString().split('.');
  const integerPart = parts[0];
  const decimalPart = parts[1];

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (decimalPart !== undefined) {
    return formattedInteger + '.' + decimalPart;
  }

  return formattedInteger;
}

module.exports = { formatNumberWithCommas };
