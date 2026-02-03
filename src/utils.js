// Utility functions

function formatNumberWithCommas(number) {
  // Handle non-number inputs
  if (typeof number !== 'number' || isNaN(number)) {
    return String(number);
  }

  // Use toLocaleString for formatting with commas
  // This handles integers, decimals, and negative numbers automatically
  return number.toLocaleString('en-US');
}

module.exports = { formatNumberWithCommas };
