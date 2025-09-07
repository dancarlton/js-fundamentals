// Write a function `print2d` that accepts a two-dimensional array as an argument. The function
// should print all inner elements of the array.

const print2d = function (arrays) {
  for (i = 0; i < arrays.length; i++) {
    let subarray = arrays[i]
    for (j = 0; j < subarray.length; j++) {
      console.log(subarray[j])
    }
  }
}

let array1 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i'],
]
print2d(array1)
// prints
//  a
//  b
//  c
//  d
//  e
//  f
//  g
//  h
//  i

let array2 = [[9, 3, 4], [11], [42, 100]];
print2d(array2);
// prints
//  9
//  3
//  4
//  11
//  42
//  100
