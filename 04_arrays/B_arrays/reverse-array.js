// Write a function `reverseArray` that accepts an array as an argument. The function should return a
// array containing the elements of the original array in reverse order.

const reverseArray = array => {
  let reverse = []

  for (i = array.length - 1; i >= 0; i--) {
    reverse.push(array[i])
  }

  return reverse
}

console.log(reverseArray(['zero', 'one', 'two', 'three'])) // ['three', 'two', 'one', 'zero']
console.log(reverseArray([7, 1, 8])) // [8, 1, 7]
