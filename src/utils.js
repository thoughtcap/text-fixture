// Number formatting utilities

function formatNumberWithCommas(number) {
  // Handle non-numeric input
  if (typeof number !== 'number' || isNaN(number)) {
    throw new TypeError('Input must be a valid number');
  }

  // Handle Infinity and -Infinity
  if (!isFinite(number)) {
    return String(number);
  }

  // Use toLocaleString for reliable formatting
  // This handles integers, decimals, and negative numbers correctly
  return number.toLocaleString('en-US');
}

module.exports = { formatNumberWithCommas };
