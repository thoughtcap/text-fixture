// Utility functions for number formatting

/**
 * Formats a number with comma separators
 * @param {number|string} num - The number to format
 * @returns {string} - The formatted number string
 */
function formatNumberWithCommas(num) {
  if (num === null || num === undefined) {
    return '';
  }

  const number = Number(num);

  if (isNaN(number)) {
    return String(num);
  }

  return number.toLocaleString('en-US');
}

module.exports = { formatNumberWithCommas };
