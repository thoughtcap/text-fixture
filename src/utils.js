/**
 * Formats a number with comma thousand separators.
 * @param {number|string} value - The number to format
 * @returns {string} Formatted number string, or empty string for invalid input
 */
function formatNumberWithCommas(value) {
  // Handle invalid inputs: null, undefined, NaN, non-finite numbers
  if (value === null || value === undefined) {
    return "";
  }
  
  // Check for NaN or non-finite numbers
  if (typeof value === "number" && (isNaN(value) || !isFinite(value))) {
    return "";
  }
  
  // Convert to string for processing
  const str = String(value);
  
  // Check if the string represents a valid number
  // Allow: optional sign, digits, optional decimal point and digits
  // Reject: empty string, non-numeric strings
  if (!/^-?\d*\.?\d+$/.test(str.trim())) {
    return "";
  }
  
  // Extract sign, integer part, and decimal part
  const sign = str.startsWith("-") ? "-" : "";
  const parts = str.replace(/^-/, "").split(".");
  const integerPart = parts[0] || "0";
  const decimalPart = parts[1];
  
  // Apply regex to format integer part with commas
  // \B(?=(\d{3})+(?!\d)) matches positions between groups of 3 digits
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  // Reassemble: sign + formattedInteger + (decimal ? "." + decimal : "")
  return sign + formattedInteger + (decimalPart ? "." + decimalPart : "");
}

module.exports = { formatNumberWithCommas };
