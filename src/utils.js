// Number formatting utilities

function formatNumberWithCommas(number) {
  // Handle edge cases: null, undefined, NaN
  if (number === null || number === undefined) {
    return '';
  }
  
  // Check if input is NaN or not a number
  if (typeof number !== 'number' || isNaN(number)) {
    return '';
  }
  
  // Use toLocaleString for formatting with commas
  return number.toLocaleString('en-US');
}

module.exports = { formatNumberWithCommas };
