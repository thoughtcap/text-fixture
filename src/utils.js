// Utility functions for formatting

/**
 * Formats a number with commas as thousands separators.
 * @param {number|string} number - The number to format
 * @returns {string} The formatted number string with commas
 */
function formatNumberWithCommas(number) {
  // Handle non-numeric input
  if (number === null || number === undefined) {
    return String(number);
  }

  const num = Number(number);

  // Return original if not a valid number
  if (isNaN(num)) {
    return String(number);
  }

  // Split into integer and decimal parts
  const parts = num.toString().split('.');
  const integerPart = parts[0];
  const decimalPart = parts[1];

  // Add commas to integer part using regex
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Reconstruct with decimal part if present
  if (decimalPart !== undefined) {
    return formattedInteger + '.' + decimalPart;
  }

  return formattedInteger;
}

module.exports = { formatNumberWithCommas };
