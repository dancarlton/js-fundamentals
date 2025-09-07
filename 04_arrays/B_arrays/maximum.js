// Write a function `maximum` that accepts an array of numbers as an argument. The function should
// return the largest number of the array. If the array is empty, then the function should return null.

let maximum = function (numbers) {
  if (numbers.length === 0) {
    return null
  }

  let largest = numbers[0]
  for (i = 0; i < numbers.length; i++) {
    if (largest < numbers[i]) {
      largest = numbers[i]
    }
  }
  return largest
}

console.log(maximum([5, 6, 3, 7])) // 7
console.log(maximum([17, 15, 19, 11, 2])) // 19
console.log(maximum([])) // null
