// Write a function `removeFirstVowel` that accepts a string as an argument. The function should return
// the string with it's first vowel removed.

let vowels = ['a', 'e', 'i', 'o', 'u']

let removeFirstVowel = function (string) {
  let newString = ''
  let vowelRemove = false

  let array = string.split('')
  for (i = 0; i < array.length; i++) {
    if (vowels.includes(array[i]) && !vowelRemove) {
      vowelRemove = true
    } else {
      newString += array[i]
    }
  }

  return newString
}

console.log(removeFirstVowel('volcano')) // 'vlcano'
console.log(removeFirstVowel('celery')) // 'clery'
console.log(removeFirstVowel('juice')) // 'jice'
