/**
 * Formats a number with comma separators
 * @param {number|string} num - The number to format
 * @returns {string} The formatted number string
 */
function formatNumberWithCommas(num) {
  // Handle null, undefined, or empty string
  if (num === null || num === undefined || num === '') {
    return '0';
  }

  // Convert string to number if needed
  const number = typeof num === 'string' ? parseFloat(num) : num;

  // Handle invalid numbers (NaN)
  if (isNaN(number)) {
    return '0';
  }

  // Format the number with comma separators
  return number.toLocaleString('en-US');
}

module.exports = { formatNumberWithCommas };
