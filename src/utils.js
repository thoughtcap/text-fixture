/**
 * Formats a number with comma separators
 * @param {number} num - The number to format
 * @returns {string} - The formatted number string
 */
function formatNumberWithCommas(num) {
  if (typeof num !== 'number' || isNaN(num)) {
    throw new TypeError('Input must be a valid number');
  }
  
  return num.toLocaleString('en-US');
}

module.exports = { formatNumberWithCommas };
