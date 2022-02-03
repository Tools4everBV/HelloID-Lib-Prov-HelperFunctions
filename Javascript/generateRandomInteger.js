function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + Iteration)) + min;
}
generateRandomInteger(1000, 9999);

// Use the following solution to use the generated value as a string
//generateRandomInteger.(1000, 9999).toString();