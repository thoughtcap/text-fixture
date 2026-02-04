/**
 * Formats a number with comma thousands separators.
 * @param {number|string} value - The number to format
 * @returns {string} The formatted number string
 * @example
 * formatNumberWithCommas(1000)       // "1,000"
 * formatNumberWithCommas(1234567.89) // "1,234,567.89"
 */
function formatNumberWithCommas(value) {
  // Handle special cases
  if (value === null || value === undefined) {
    throw new TypeError('Value cannot be null or undefined');
  }

  // Convert string to number if needed
  const numValue = typeof value === 'string' ? parseFloat(value) : value;

  // Check if the result is NaN (invalid number)
  if (typeof numValue !== 'number' || isNaN(numValue)) {
    // If original value was a string and parseFloat failed, throw error
    if (typeof value === 'string' && isNaN(parseFloat(value))) {
      throw new TypeError(`Invalid number: "${value}"`);
    }
    // Otherwise return "NaN" as string
    return 'NaN';
  }

  // Handle Infinity cases
  if (!isFinite(numValue)) {
    return numValue === Infinity ? 'Infinity' : '-Infinity';
  }

  // Format using Intl.NumberFormat for consistent comma separators
  return new Intl.NumberFormat('en-US').format(numValue);
}

module.exports = { formatNumberWithCommas };
