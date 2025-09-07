// Write a function `removeVowels` that accepts a string as an argument. The function should return
// a version of the string where all vowels are removed.

let vowels = ['a', 'e', 'i', 'o', 'u']

let removeVowels = function (string) {
  let newString = []

  let array = string.split('')
  for (i = 0; i < array.length; i++) {
    if (!vowels.includes(array[i])) {
      newString.push(array[i])
    }
  }

  return newString.join('')
}

console.log(removeVowels('jello')) // jll
console.log(removeVowels('sensitivity')) // snstvty
console.log(removeVowels('cellar door')) // cllr dr
