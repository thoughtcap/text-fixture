// Utility functions for formatting

function formatNumberWithCommas(number) {
  // Handle invalid input
  if (typeof number !== 'number' || isNaN(number)) {
    throw new TypeError('Input must be a valid number');
  }

  // Use toLocaleString for reliable formatting
  return number.toLocaleString('en-US');
}

module.exports = { formatNumberWithCommas };
