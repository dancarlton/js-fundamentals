// Write a function `shortenLongWords` that accepts a sentence string as an argument. The function
// should return the same sentence where words longer than 4 characters have their vowels removed.

// set the vowel
// turn string into array
// loop thru
// el length <= 4
// if true, add word w/o vowels to new string
// if false, add the word to new string
// return the new string

let vowels = ['a', 'e', 'i', 'o', 'u']

let shortenLongWords = function (string) {
  let newArray = []

  let array = string.split(' ')
  for (i = 0; i < array.length; i++) {
    let word = array[i]

    if (word.length > 4) {
      let nonVowelString = ''

      for (j = 0; j < word.length; j++) {
        let char = word[j]
        if (!vowels.includes(char)) {
          nonVowelString += char
        }
      }
      newArray.push(nonVowelString)

    } else {
        newArray.push(word)
    }
  }
  return newArray.join(' ').trim()
}

console.log(shortenLongWords('they are very noble people')) // 'they are very nbl ppl'
console.log(shortenLongWords('stick with it')) // 'stck with it'
console.log(shortenLongWords('ballerina, you must have seen her')) // 'bllrna, you must have seen her'
