/**
 * Formats a number with commas as thousand separators.
 * @param {number|bigint|string} value - The value to format
 * @returns {string} The formatted number string
 * @throws {TypeError} If input is not a valid finite number
 */
function formatNumberWithCommas(value) {
  // Handle null and undefined
  if (value === null || value === undefined) {
    throw new TypeError('Value cannot be null or undefined');
  }

  // Handle bigint
  if (typeof value === 'bigint') {
    const str = value.toString();
    const sign = str.startsWith('-') ? '-' : '';
    const digits = sign ? str.slice(1) : str;
    const formatted = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return sign + formatted;
  }

  // Handle number type
  if (typeof value === 'number') {
    if (isNaN(value) || !isFinite(value)) {
      throw new TypeError('Value must be a finite number');
    }
    const str = value.toString();
    return formatNumberString(str);
  }

  // Handle string type
  if (typeof value === 'string') {
    // Check if it's a valid numeric string
    const trimmed = value.trim();
    if (trimmed === '' || trimmed === '-') {
      throw new TypeError('Value must be a valid number');
    }
    
    // Try to parse as number to validate
    const num = Number(trimmed);
    if (isNaN(num) || !isFinite(num)) {
      throw new TypeError('Value must be a valid finite number');
    }
    
    return formatNumberString(trimmed);
  }

  // Invalid type
  throw new TypeError('Value must be a number, bigint, or numeric string');
}

/**
 * Helper function to format a numeric string with commas
 * @param {string} str - The numeric string to format
 * @returns {string} The formatted string with commas
 */
function formatNumberString(str) {
  // Extract sign if negative
  const sign = str.startsWith('-') ? '-' : '';
  const unsigned = sign ? str.slice(1) : str;
  
  // Split into integer and fractional parts
  const parts = unsigned.split('.');
  const integerPart = parts[0];
  const fractionalPart = parts.length > 1 ? '.' + parts[1] : '';
  
  // Apply regex to insert commas in integer part
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  // Recombine: sign + formatted integer + fractional part
  return sign + formattedInteger + fractionalPart;
}

module.exports = { formatNumberWithCommas };
