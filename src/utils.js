// Utility functions for number formatting

/**
 * Formats a number with comma separators as thousands separators.
 * 
 * @param {number} num - The number to format (integer or float)
 * @returns {string} A string representation of the number with commas
 * 
 * @example
 * formatNumberWithCommas(1000) // "1,000"
 * formatNumberWithCommas(1234567) // "1,234,567"
 * formatNumberWithCommas(1234567.89) // "1,234,567.89"
 * formatNumberWithCommas(-50000) // "-50,000"
 */
function formatNumberWithCommas(num) {
  // Handle null, undefined, or non-numeric input
  if (num === null || num === undefined) {
    return String(num);
  }
  
  // Check if input is a valid number
  if (typeof num !== 'number' || isNaN(num)) {
    return String(num);
  }
  
  // Use toLocaleString for reliable formatting
  return num.toLocaleString('en-US');
}

module.exports = { formatNumberWithCommas };
