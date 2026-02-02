// Utility functions module

function formatNumberWithCommas(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    return String(number);
  }

  const parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return parts.join('.');
}

module.exports = { formatNumberWithCommas };
