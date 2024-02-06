//Task-1:
function multiply(num1, num2, num3, num4) {
  const result = num1 * num2 * num3 * num4;
  return result;
}
const answer = multiply(1, 2, 3, 4);
console.log("Multiplication of four numbers: " + answer);

console.log(
  "=================================================================="
);

//Task-2:
function mathOperation(number) {
  if (number % 2 !== 0) {
    number *= 2;
  } else {
    number /= 2;
  }
  return number;
}
const result = mathOperation(50);
console.log(result);

console.log(
  "=================================================================="
);

//Task-3:
function make_avg(array, size) {
  let sum = 0;
  for (const iterator of array) {
    sum += iterator;
  }
  const avg = sum / size;
  return avg;
}
const numbers = [2, 4, 5, 6];
const avg_result = make_avg(numbers, 4);
console.log("Average: " + avg_result);

console.log(
  "=================================================================="
);

// Task-4:
function count_zero(binary) {
  let count = 0;
  for (const iterator of binary) {
    if (iterator === "0") {
      count++;
    }
  }
  return count;
}
const binary = "001011101100";
const totalZero = count_zero(binary);
console.log("Total " + totalZero + " 0’s are there in that string.");

console.log(
  "=================================================================="
);

// Task-5:
function odd_even(number) {
  if (number % 2 !== 0) {
    return "Odd";
  } else {
    return "Even";
  }
}
const evenOddResult = odd_even(11);
console.log(evenOddResult);

console.log(
  "=================================================================="
);
