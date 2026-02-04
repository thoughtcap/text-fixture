/**
 * Formats a number with comma thousand separators.
 * @param {number|string} value - The number to format
 * @returns {string} Formatted number string (e.g., "1,234,567")
 */
function formatNumberWithCommas(value) {
  if (typeof value !== 'number' && typeof value !== 'string') {
    return String(value);
  }
  
  const num = Number(value);
  if (!Number.isFinite(num)) {
    return String(value);
  }
  
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

module.exports = { formatNumberWithCommas };
