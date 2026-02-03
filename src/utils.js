// Utility functions for number formatting

/**
 * Formats a number with comma separators for thousands
 * @param {number} number - The number to format
 * @returns {string} The formatted number string with commas
 */
function formatNumberWithCommas(number) {
  // Handle null and undefined
  if (number === null || number === undefined) {
    return String(number);
  }

  // Handle non-numeric input (but allow numeric strings)
  if (typeof number !== 'number' && typeof number !== 'string') {
    return String(number);
  }

  // Convert string to number if it's a numeric string
  const num = typeof number === 'string' ? parseFloat(number) : number;

  // Handle NaN
  if (isNaN(num)) {
    return String(number);
  }

  // Handle Infinity
  if (!isFinite(num)) {
    return String(num);
  }

  // Use toLocaleString for reliable formatting
  return num.toLocaleString('en-US');
}

module.exports = { formatNumberWithCommas };
