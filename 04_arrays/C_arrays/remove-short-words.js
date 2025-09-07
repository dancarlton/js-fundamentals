// Write a function `removeShortWords` that accepts a sentence string as an argument. The function
// should return a new sentence where all of the words shorter than 4 characters are removed.

let removeShortWords = function (sentence) {
  let array = sentence.split(' ')
  let shortWords = []

  for (i = 0; i < array.length; i++) {
    let word = array[i]

    if (word.length >= 4) {
      shortWords.push(word)
    }
  }

  return shortWords.join(' ')
}

console.log(removeShortWords('knock on the door will you')) // 'knock door will'
console.log(removeShortWords('a terrible plan')) // 'terrible plan'
console.log(removeShortWords('run faster that way')) // 'faster that'
