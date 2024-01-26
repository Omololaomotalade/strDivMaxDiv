function processString(inputString, divisor, maxDiv) {
  // Calculate the length of each substring
  const subStringLength = Math.min(Math.floor(inputString.length / divisor), 2);

  // Split the input string into an array of substrings
  let substrings = [];
  for (let i = 0; i < divisor; i++) {
      const startIdx = i * subStringLength;
      const endIdx = (i + 1) * subStringLength;
      substrings.push(inputString.slice(startIdx, endIdx));
  }

  // Replace the last substrings with '*' if maxDiv is greater than divisor
  if (maxDiv > divisor) {
      const replaceCount = maxDiv - divisor;
      for (let i = divisor - replaceCount; i < divisor; i++) {
          substrings[i] = substrings[i].slice(0, -replaceCount) + '*'.repeat(replaceCount);
      }
  }

  return substrings;
}

// Example usage
const inputString = 'abcdefghijklmnopqrstuvwxy';
const divisor = 3;
const maxDiv = 5;

const result = processString(inputString, divisor, maxDiv);
console.log(result);
