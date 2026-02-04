/**
 * Formats a number with comma separators for thousands
 * 
 * @param {number} number - The number to format
 * @returns {string} The formatted number string with comma separators
 * 
 * @example
 * formatNumberWithCommas(1000) // "1,000"
 * formatNumberWithCommas(1234567) // "1,234,567"
 * formatNumberWithCommas(-1234567) // "-1,234,567"
 * formatNumberWithCommas(12345.678) // "12,345.678"
 * formatNumberWithCommas(0) // "0"
 */
function formatNumberWithCommas(number) {
  // Handle invalid inputs
  if (typeof number !== 'number' || isNaN(number)) {
    return 'NaN';
  }
  
  // Use toLocaleString for reliable formatting
  return number.toLocaleString('en-US');
}

module.exports = { formatNumberWithCommas };
