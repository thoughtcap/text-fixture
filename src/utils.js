/**
 * Formats a number with comma thousand separators.
 * @param {number|string} value - The number to format
 * @returns {string} The formatted number string
 */
function formatNumberWithCommas(value) {
  // Handle special cases
  if (value === null || value === undefined) return '';
  
  const num = Number(value);
  if (!Number.isFinite(num)) return String(value);
  
  // Split into integer and decimal parts
  const [intPart, decPart] = String(num).replace('-', '').split('.');
  
  // Insert commas using regex
  const formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  // Reassemble with sign and decimal
  const sign = num < 0 ? '-' : '';
  return sign + formatted + (decPart !== undefined ? '.' + decPart : '');
}

module.exports = { formatNumberWithCommas };
