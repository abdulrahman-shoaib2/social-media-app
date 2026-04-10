export function formatDate(dateString) {
  const date = new Date(dateString);

  // Options for formatting time and date
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,      // 12-hour format (AM/PM)
    month: 'short',    // Short month name (e.g., 'Feb')
    day: 'numeric',    // Day of the month (e.g., '20')
    year: 'numeric',   // Full year (e.g., '2026')
  };

  // Format the date and time using the options
  return date.toLocaleString('en-US', options).replace(',', ' ·');
}

// Example usage
// const formattedDate = formatDate("2026-02-20T02:16:38.038Z");
// console.log(formattedDate);  // Output: "4:38 AM · Feb 20, 2026"


export function formatNumber(number) {
  if (number < 1000) return number.toString();

  const suffixes = ['k', 'M', 'B', 'T'];  // Thousand, Million, Billion, Trillion
  let suffixIndex = -1;
  
  // Loop through the suffixes to find the appropriate one
  while (number >= 1000) {
    number /= 1000;
    suffixIndex++;
  }

  // Round to 1 decimal place and add the corresponding suffix
  return `${number.toFixed(1)}${suffixes[suffixIndex]}`;
}

// Example usage
// const formattedNumber = formatNumber(12300);
// console.log(formattedNumber);  // Output: "12.3k"
