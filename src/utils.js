// Utility functions for formatting

/**
 * Formats a number with comma separators for thousands.
 * @param {number} number - The number to format
 * @returns {string} The formatted number string with commas
 * @example
 * formatNumberWithCommas(1000000) // "1,000,000"
 * formatNumberWithCommas(-5000)   // "-5,000"
 * formatNumberWithCommas(1234.56) // "1,234.56"
 */
function formatNumberWithCommas(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    return String(number);
  }

  const parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return parts.join('.');
}

module.exports = { formatNumberWithCommas };
