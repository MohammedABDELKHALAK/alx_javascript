const numbers = [4, 8, 15, 16, 12, 42];

// Find the index of the value 12
const index = numbers.indexOf(12);

// Replace 12 with 89 if found
if (index !== -1) {
  numbers[index] = 89;
}

console.log(numbers); // Outputs [4, 8, 15, 16, 23, 42] with 12 replaced by 89
