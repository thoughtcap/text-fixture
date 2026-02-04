/**
 * Formats a number with comma separators for thousands.
 * 
 * @param {number|string} number - The number to format. Can be a number or numeric string.
 * @returns {string} The formatted number string with comma separators (e.g., "1,234,567").
 * 
 * @example
 * formatNumberWithCommas(1234567)      // Returns "1,234,567"
 * formatNumberWithCommas(1234.56)      // Returns "1,234.56"
 * formatNumberWithCommas(-1234567)     // Returns "-1,234,567"
 * formatNumberWithCommas(123)          // Returns "123"
 * formatNumberWithCommas("1234567")    // Returns "1,234,567"
 */
function formatNumberWithCommas(number) {
  // Handle invalid/non-numeric inputs
  if (number === null || number === undefined || number === '') {
    return String(number === null || number === undefined ? '' : number);
  }

  // Convert to number if it's a string
  const num = typeof number === 'string' ? parseFloat(number) : number;

  // Check if the conversion resulted in a valid number
  if (isNaN(num)) {
    return String(number);
  }

  // Use toLocaleString for reliable, locale-consistent formatting
  // This handles negative numbers, decimals, and large numbers automatically
  return num.toLocaleString('en-US');
}

module.exports = { formatNumberWithCommas };
